
import { Alert } from '../types';
import { MOCK_ALERTS } from '../constants';

type AlertListener = (alert: Alert) => void;

class LiveAlertService {
    private listeners: AlertListener[] = [];
    private alerts: Alert[] = [...MOCK_ALERTS];
    private socket: WebSocket | null = null;
    private isSimulating: boolean = false;

    constructor() {
        this.init();
    }

    private init() {
        // In a real app, you'd connect to a WS URL from env
        const wsUrl = (import.meta as any).env?.VITE_WS_URL;

        if (wsUrl) {
            this.connect(wsUrl);
        } else {
            this.startSimulation();
        }
    }

    private connect(url: string) {
        try {
            this.socket = new WebSocket(url);
            this.socket.onmessage = (event) => {
                try {
                    const alert: Alert = JSON.parse(event.data);
                    this.addAlert(alert);
                } catch (e) {
                    console.error('Failed to parse WS message', e);
                }
            };
            this.socket.onclose = () => {
                console.log('WS closed, falling back to simulation');
                this.startSimulation();
            };
            this.socket.onerror = () => {
                console.error('WS Error, falling back to simulation');
                this.startSimulation();
            };
        } catch (e) {
            console.error('Failed to create WS connection', e);
            this.startSimulation();
        }
    }

    private startSimulation() {
        if (this.isSimulating) return;
        this.isSimulating = true;

        // Simulate a new alert every 20 seconds to show "Live" movement
        setInterval(() => {
            const newAlert = this.generateMockAlert();
            this.addAlert(newAlert);
        }, 20000);
    }

    private generateMockAlert(): Alert {
        const types: Alert['type'][] = ['GOAL', 'DANGER', 'AI_PICK', 'MOMENTUM'];
        const type = types[Math.floor(Math.random() * types.length)];

        return {
            id: `live-${Date.now()}`,
            matchId: String(Math.floor(Math.random() * 5) + 1),
            type,
            message: this.getMockMessage(type),
            timestamp: new Date().toISOString(),
            minute: Math.floor(Math.random() * 90),
            isConfirmed: Math.random() > 0.5,
            accuracyScore: Math.floor(Math.random() * 15) + 82
        };
    }

    private getMockMessage(type: Alert['type']): string {
        const teams = ['Man City', 'Real Madrid', 'Petro', '1º de Agosto', 'Arsenal'];
        const team = teams[Math.floor(Math.random() * teams.length)];

        switch (type) {
            case 'GOAL': return `GOLO! Pressão intensa do ${team} resultou em finalização certeira.`;
            case 'DANGER': return `PERIGO IMEDIATO! Ataque do ${team} com superioridade numérica na área.`;
            case 'AI_PICK': return `PICK IA: Algoritmo detectou alto valor na odd de golo para o ${team}.`;
            case 'MOMENTUM': return `MOMENTUM: Mudança drástica favorável ao ${team} nos últimos 2 minutos.`;
            default: return 'Alerta técnico detectado.';
        }
    }

    private addAlert(alert: Alert) {
        this.alerts = [alert, ...this.alerts].slice(0, 50); // Keep last 50
        this.listeners.forEach(l => l(alert));
    }

    public subscribe(listener: AlertListener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    public getAlerts() {
        return this.alerts;
    }
}

export const liveAlertService = new LiveAlertService();
