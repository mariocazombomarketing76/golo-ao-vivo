
import { useState, useEffect } from 'react';
import { Alert } from '../types';
import { liveAlertService } from '../services/liveAlertService';

export const useLiveAlerts = () => {
    const [alerts, setAlerts] = useState<Alert[]>(liveAlertService.getAlerts());

    useEffect(() => {
        const unsubscribe = liveAlertService.subscribe(() => {
            setAlerts([...liveAlertService.getAlerts()]);
        });
        return unsubscribe;
    }, []);

    return alerts;
};
