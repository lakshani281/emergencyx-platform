import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck 
} from 'lucide-react';

interface ResponderDashboardProps {
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  onSelectIncident?: (incidentId: string) => void;
  onNavigateTab?: (tab: 'dashboard' | 'incidents' | 'tasks' | 'alerts') => void;
}

export const ResponderDashboard: React.FC<ResponderDashboardProps> = ({
  onSwitchRole,
  onSelectIncident,
  onNavigateTab
}) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const stats = [
    { label: 'ACTIVE', count: 8, color: '#ef4444', bgColor: '#fff1f2', borderColor: '#ffe4e6' },
    { label: 'CRITICAL', count: 3, color: '#f97316', bgColor: '#fff7ed', borderColor: '#ffedd5' },
    { label: 'MY TASKS', count: 2, color: '#2563eb', bgColor: '#eff6ff', borderColor: '#dbeafe' },
    { label: 'RESOLVED', count: 12, color: '#16a34a', bgColor: '#f0fdf4', borderColor: '#dcfce7' },
  ];

  const nearbyIncidents = [
    {
      id: '#EX-2847',
      title: 'Medical Emergency',
      distance: '0.3 km',
      severity: 'Critical',
      icon: '🚨',
      severityColor: '#dc2626',
      severityBg: '#fee2e2'
    },
    {
      id: '#EX-2851',
      title: 'Flood Evacuation',
      distance: '1.2 km',
      severity: 'Critical',
      icon: '🚨',
      severityColor: '#dc2626',
      severityBg: '#fee2e2'
    },
    {
      id: '#EX-2839',
      title: 'Boat Rescue',
      distance: '2.4 km',
      severity: 'Moderate',
      icon: '⚠️',
      severityColor: '#ea580c',
      severityBg: '#ffedd5'
    }
  ];

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
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingRight: '10px'
        }}>
          <div style={{
            width: '11px',
            height: '11px',
            backgroundColor: '#0f172a',
            borderRadius: '50%',
            border: '1px solid #1e293b'
          }} />
        </div>

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

        {/* Top Demo Selector Capsule */}
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
            onClick={() => onSwitchRole && onSwitchRole('citizen')}
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
            <User size={13} strokeWidth={2.5} />
            <span>Citizen</span>
          </button>
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
              backgroundColor: '#2563eb',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(37,99,235,0.35)'
            }}
          >
            <Truck size={13} strokeWidth={2.5} />
            <span>Responder</span>
          </button>
        </div>

        {/* Scrollable Dashboard Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>

          {/* Responder Profile & Online Toggle */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.25)'
              }}>
                <ShieldAlert size={22} color="#ffffff" strokeWidth={2.4} />
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                  Responder · Sabaragamuwa #04
                </span>
                <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>
                  Kasun Perera 🚒
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: isOnline ? '#16a34a' : '#94a3b8', borderRadius: '50%' }} />
                <span style={{ fontSize: '11px', fontWeight: '700', color: isOnline ? '#16a34a' : '#64748b' }}>
                  {isOnline ? 'Online' : 'Offline'}
                </span>
              </div>

              <div
                onClick={() => setIsOnline(!isOnline)}
                style={{
                  width: '42px',
                  height: '24px',
                  backgroundColor: isOnline ? '#16a34a' : '#cbd5e1',
                  borderRadius: '9999px',
                  padding: '2px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  transform: isOnline ? 'translateX(18px)' : 'translateX(0px)',
                  transition: 'transform 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }} />
              </div>
            </div>
          </div>

          {/* 4 Metrics Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {stats.map((stat, idx) => (
              <div
                key={idx}
                onClick={() => onNavigateTab && onNavigateTab('incidents')}
                style={{
                  backgroundColor: stat.bgColor,
                  borderRadius: '16px',
                  border: `1.5px solid ${stat.borderColor}`,
                  padding: '10px 4px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '18px', fontWeight: '900', color: stat.color, lineHeight: '1.1' }}>
                  {stat.count}
                </span>
                <span style={{ fontSize: '9px', fontWeight: '800', color: stat.color, marginTop: '4px', letterSpacing: '0.4px' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Live Incident Map */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>Live Incident Map</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '5px', height: '5px', backgroundColor: '#2563eb', borderRadius: '50%' }} />
                <span style={{ fontSize: '10px', fontWeight: '800', color: '#2563eb', letterSpacing: '0.4px' }}>LIVE</span>
              </div>
            </div>

            <div style={{
              width: '100%',
              height: '180px',
              backgroundColor: '#e2f0d9',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              border: '1.5px solid #cbd5e1',
              boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
            }}>
              <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                <line x1="45" y1="0" x2="45" y2="180" stroke="#ffffff" strokeWidth="8" />
                <line x1="110" y1="0" x2="110" y2="180" stroke="#ffffff" strokeWidth="10" />
                <line x1="180" y1="0" x2="180" y2="180" stroke="#ffffff" strokeWidth="12" />
                <line x1="250" y1="0" x2="250" y2="180" stroke="#ffffff" strokeWidth="10" />
                <line x1="315" y1="0" x2="315" y2="180" stroke="#ffffff" strokeWidth="8" />

                <line x1="0" y1="35" x2="360" y2="35" stroke="#ffffff" strokeWidth="8" />
                <line x1="0" y1="75" x2="360" y2="75" stroke="#ffffff" strokeWidth="10" />
                <line x1="0" y1="120" x2="360" y2="120" stroke="#ffffff" strokeWidth="12" />
                <line x1="0" y1="160" x2="360" y2="160" stroke="#ffffff" strokeWidth="8" />
              </svg>

              <div style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                backgroundColor: 'rgba(255,255,255,0.85)',
                padding: '2px 8px',
                borderRadius: '6px',
                fontSize: '9px',
                fontWeight: '800',
                color: '#64748b'
              }}>
                MAP
              </div>

              <div style={{
                position: 'absolute',
                left: '95px',
                top: '40px',
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(220, 38, 38, 0.25)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '22px',
                  height: '22px',
                  backgroundColor: '#dc2626',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '900',
                  border: '2px solid #ffffff'
                }}>
                  !
                </div>
              </div>

              <div style={{
                position: 'absolute',
                left: '175px',
                top: '85px',
                width: '22px',
                height: '22px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '900',
                border: '2px solid #ffffff'
              }}>
                !
              </div>

              <div style={{
                position: 'absolute',
                left: '255px',
                top: '40px',
                width: '22px',
                height: '22px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '900',
                border: '2px solid #ffffff'
              }}>
                !
              </div>

              <div style={{
                position: 'absolute',
                left: '202px',
                top: '90px',
                width: '20px',
                height: '20px',
                backgroundColor: '#2563eb',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: '800',
                border: '2px solid #ffffff',
                boxShadow: '0 2px 6px rgba(37,99,235,0.4)'
              }}>
                R
              </div>

              <div style={{
                position: 'absolute',
                left: '125px',
                top: '118px',
                width: '20px',
                height: '20px',
                backgroundColor: '#16a34a',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '9.5px',
                fontWeight: '800',
                border: '2px solid #ffffff'
              }}>
                S
              </div>

              <div style={{
                position: 'absolute',
                left: '268px',
                top: '115px',
                width: '20px',
                height: '20px',
                backgroundColor: '#ea580c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '900',
                border: '2px solid #ffffff'
              }}>
                +
              </div>
            </div>
          </div>

          {/* Nearby Incidents List */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>Nearby Incidents</h3>
              <button 
                onClick={() => onNavigateTab && onNavigateTab('incidents')}
                style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}
              >
                View all →
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {nearbyIncidents.map((incident) => (
                <div
                  key={incident.id}
                  onClick={() => onNavigateTab && onNavigateTab('incidents')}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '18px',
                    padding: '12px 14px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: incident.severity === 'Critical' ? '#fff1f2' : '#fffbeb',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '18px'
                    }}>
                      {incident.icon}
                    </div>

                    <div>
                      <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>
                        {incident.title}
                      </h4>
                      <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginTop: '1px' }}>
                        {incident.id} · {incident.distance}
                      </p>
                    </div>
                  </div>

                  <span style={{
                    backgroundColor: incident.severityBg,
                    color: incident.severityColor,
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '3px 10px',
                    borderRadius: '9999px'
                  }}>
                    {incident.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Tab Navigation Bar */}
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #f1f5f9',
          padding: '8px 12px 16px 12px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>📊</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#2563eb', marginTop: '2px' }}>DASHBOARD</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#2563eb', borderRadius: '4px', marginTop: '2px' }} />
          </div>

          <div 
            onClick={() => onNavigateTab && onNavigateTab('incidents')}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🚨</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>INCIDENTS</span>
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '2px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              fontSize: '8.5px',
              fontWeight: '800',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              4
            </span>
          </div>

          <div 
            onClick={() => onNavigateTab && onNavigateTab('tasks')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>✅</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TASKS</span>
          </div>

          <div 
            onClick={() => onNavigateTab && onNavigateTab('alerts')}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>ALERTS</span>
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              backgroundColor: '#dc2626',
              color: '#ffffff',
              fontSize: '8.5px',
              fontWeight: '800',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              2
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};