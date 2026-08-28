import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Navigation, 
  Phone, 
  Signal, 
  Wifi, 
  BatteryMedium,
  User,
  Truck,
  ShieldCheck,
  Radio,
  Clock
} from 'lucide-react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

interface LiveTrackingScreenProps {
  onBack: () => void;
  onNavigateTab?: (tab: 'home' | 'sos' | 'track' | 'shelters' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  requestId?: string;
}

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
};

export const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({
  onBack,
  onNavigateTab,
  onSwitchRole,
  requestId = "EX-2847"
}) => {
  const [citizenPos, setCitizenPos] = useState<{ lat: number; lng: number }>({ lat: 6.6828, lng: 80.4033 });
  const [responderPos, setResponderPos] = useState<{ lat: number; lng: number }>({ lat: 6.6920, lng: 80.3950 });
  const [distanceKm, setDistanceKm] = useState<number>(1.2);
  const [etaMins, setEtaMins] = useState<number>(5);
  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);

  useEffect(() => {
    // 1. Citizen Live GPS Location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setCitizenPos({ lat, lng });
          setResponderPos({ lat: lat + 0.008, lng: lng - 0.007 });
        },
        (err) => console.warn('GPS signal default fallback:', err),
        { enableHighAccuracy: true }
      );
    }

    // 2. Socket Room Join
    socket.emit('join_tracking', requestId);

    // 3. Socket Live Updates
    socket.on('receive_responder_location', (data: { lat: number; lng: number }) => {
      setResponderPos({ lat: data.lat, lng: data.lng });
    });

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // 4. Smooth Visual Movement Simulation
    const interval = setInterval(() => {
      setResponderPos((prev) => {
        const dLat = (citizenPos.lat - prev.lat) * 0.08;
        const dLng = (citizenPos.lng - prev.lng) * 0.08;
        const newLat = prev.lat + dLat;
        const newLng = prev.lng + dLng;

        const dist = calculateDistance(citizenPos.lat, citizenPos.lng, newLat, newLng);
        setDistanceKm(dist);
        setEtaMins(Math.max(Math.ceil(dist * 4), 1));

        return { lat: newLat, lng: newLng };
      });
    }, 3000);

    return () => {
      clearInterval(interval);
      socket.off('receive_responder_location');
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [citizenPos, requestId]);

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#23252a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '390px',
        height: '840px',
        backgroundColor: '#f8fafc',
        borderRadius: '50px',
        boxShadow: '0 30px 90px rgba(0,0,0,0.7), inset 0 0 4px 2px rgba(255,255,255,0.1)',
        border: '11px solid #373940',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}>
        
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '118px',
          height: '28px',
          backgroundColor: '#000000',
          borderRadius: '20px',
          zIndex: 50
        }} />

        {/* Top Status Bar */}
        <div style={{
          padding: '14px 28px 4px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px',
          fontWeight: '700',
          color: '#111827',
          zIndex: 40
        }}>
          <span>9:41</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#1f2937' }}>
            <Signal size={14} strokeWidth={2.5} />
            <Wifi size={14} strokeWidth={2.5} />
            <BatteryMedium size={17} strokeWidth={2.2} />
          </div>
        </div>

        {/* Demo Selector */}
        <div style={{
          marginTop: '6px',
          marginRight: 'auto',
          marginLeft: 'auto',
          backgroundColor: '#ffffff',
          padding: '4px 6px',
          borderRadius: '9999px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '12px',
          fontWeight: '600',
          zIndex: 30
        }}>
          <span style={{ color: '#64748b', paddingLeft: '8px', fontSize: '11px' }}>Demo:</span>
          <button
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 14px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '700',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(220,38,38,0.35)'
            }}
          >
            <User size={13} strokeWidth={2.5} />
            <span>Citizen</span>
          </button>
          <button
            type="button"
            onClick={() => onSwitchRole && onSwitchRole('responder')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '5px 14px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '700',
              backgroundColor: 'transparent',
              color: '#475569'
            }}
          >
            <Truck size={13} strokeWidth={2.5} />
            <span>Responder</span>
          </button>
        </div>

        {/* Main Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          overflowY: 'auto'
        }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e2e8f0',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)'
                }}
              >
                <ArrowLeft size={18} color="#0f172a" />
              </button>
              <div>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Live Rescue Tracking</h2>
                <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Request #{requestId}</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: isOffline ? '#fef3c7' : '#fee2e2',
              padding: '4px 10px',
              borderRadius: '9999px',
              border: isOffline ? '1px solid #fde68a' : '1px solid #fecaca'
            }}>
              <Radio size={12} color={isOffline ? '#b45309' : '#dc2626'} className="animate-pulse" />
              <span style={{ fontSize: '10px', fontWeight: '800', color: isOffline ? '#b45309' : '#dc2626' }}>
                {isOffline ? 'OFFLINE GPS' : 'LIVE GPS'}
              </span>
            </div>
          </div>

          {/* Interactive Map */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '270px',
            backgroundColor: '#e2e8f0',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '2px solid #e2e8f0',
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
          }}>
            <iframe
              title="Tracking Map"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${citizenPos.lng - 0.02}%2C${citizenPos.lat - 0.015}%2C${citizenPos.lng + 0.02}%2C${citizenPos.lat + 0.015}&layer=mapnik`}
            />

            {/* Simulated Live Route Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}>
              {/* Citizen Marker */}
              <div style={{
                position: 'absolute',
                top: '62%',
                left: '68%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  backgroundColor: '#dc2626',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 6px rgba(220,38,38,0.25)'
                }}>
                  <MapPin size={18} color="#ffffff" />
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', backgroundColor: '#ffffff', color: '#0f172a', padding: '1px 6px', borderRadius: '6px', marginTop: '3px', boxShadow: '0 2px 4px rgba(0,0,0,0.15)' }}>
                  You
                </span>
              </div>

              {/* Responder Vehicle Marker */}
              <div style={{
                position: 'absolute',
                top: `${25 + (1.2 - Math.min(distanceKm, 1.2)) * 25}%`,
                left: `${25 + (1.2 - Math.min(distanceKm, 1.2)) * 30}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'all 2.5s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#2563eb',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 7px rgba(37,99,235,0.25)'
                }}>
                  <Truck size={20} color="#ffffff" />
                </div>
                <span style={{ fontSize: '10px', fontWeight: '800', backgroundColor: '#2563eb', color: '#ffffff', padding: '1px 6px', borderRadius: '6px', marginTop: '3px' }}>
                  Rescue Unit
                </span>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '12px',
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(4px)',
              padding: '4px 10px',
              borderRadius: '10px',
              fontSize: '10px',
              fontWeight: '700',
              color: '#0f172a'
            }}>
              📍 Auto-Recalibrating GPS
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '10.5px', fontWeight: '700' }}>
                <Clock size={13} />
                <span>ESTIMATED ARRIVAL</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a', marginTop: '4px' }}>
                {etaMins} {etaMins === 1 ? 'min' : 'mins'}
              </h3>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '18px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#64748b', fontSize: '10.5px', fontWeight: '700' }}>
                <Navigation size={13} />
                <span>DISTANCE</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#2563eb', marginTop: '4px' }}>
                {distanceKm} km
              </h3>
            </div>
          </div>

          {/* Responder Profile */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '14px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '42px', height: '42px', backgroundColor: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                👨‍🚒
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a' }}>Kasun Perera</h4>
                  <ShieldCheck size={14} color="#2563eb" />
                </div>
                <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Sabaragamuwa Rescue Unit #4</p>
              </div>
            </div>

            <a
              href="tel:0712345678"
              style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#dcfce7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#15803d',
                textDecoration: 'none'
              }}
            >
              <Phone size={17} />
            </a>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f1f5f9',
          padding: '8px 12px 16px 12px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <div onClick={() => onNavigateTab && onNavigateTab('home')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🏠</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b' }}>HOME</span>
          </div>
          <div onClick={() => onNavigateTab && onNavigateTab('sos')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🆘</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b' }}>SOS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>📍</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626' }}>TRACK</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#dc2626', borderRadius: '4px', marginTop: '2px' }} />
          </div>
          <div onClick={() => onNavigateTab && onNavigateTab('shelters')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🏕️</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b' }}>SHELTERS</span>
          </div>
          <div onClick={() => onNavigateTab && onNavigateTab('alerts')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}>
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b' }}>ALERTS</span>
          </div>
        </div>

      </div>
    </div>
  );
};