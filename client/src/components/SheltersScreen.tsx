import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck, 
  ShieldAlert 
} from 'lucide-react';

interface SheltersScreenProps {
  onBack: () => void;
  onNavigateTab: (tab: 'home' | 'sos' | 'track' | 'shelters' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const SheltersScreen: React.FC<SheltersScreenProps> = ({
  onBack,
  onNavigateTab,
  onSwitchRole
}) => {
  const shelters = [
    {
      id: 1,
      name: 'Ernakulam District Relief Camp',
      distance: '0.8 km away',
      status: 'Open',
      statusType: 'open',
      occupancy: 320,
      totalCapacity: 500,
      percentage: (320 / 500) * 100,
      barColor: '#16a34a',
      tags: ['Food', 'Medical', 'Water', 'Beds'],
      phone: '0484-234-5678'
    },
    {
      id: 2,
      name: 'Govt. High School Shelter',
      distance: '1.4 km away',
      status: 'Almost full',
      statusType: 'warning',
      occupancy: 287,
      totalCapacity: 300,
      percentage: (287 / 300) * 100,
      barColor: '#ea580c',
      tags: ['Food', 'Water'],
      phone: '0484-987-6543'
    },
    {
      id: 3,
      name: 'Vyttila Community Hall',
      distance: '2.1 km away',
      status: 'Open',
      statusType: 'open',
      occupancy: 80,
      totalCapacity: 200,
      percentage: (80 / 200) * 100,
      barColor: '#16a34a',
      tags: ['Food', 'Medical', 'Water', 'Beds'],
      phone: '0484-112-2334'
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
      {/* Phone Mockup Frame */}
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

        {/* Demo Quick Selector Capsule */}
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

        {/* Scrollable Body */}
        <div style={{
          flex: 1,
          padding: '8px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>

          {/* Header Title with Back Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '2px' }}>
            <button
              onClick={onBack}
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#475569'
              }}
            >
              <ArrowLeft size={16} strokeWidth={2.5} />
            </button>
            <h2 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>
              Nearby Shelters
            </h2>
          </div>

          {/* Map Vector Mockup with Multi-Shelter Pins */}
          <div style={{
            width: '100%',
            height: '190px',
            backgroundColor: '#e2f0d9',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
            border: '1.5px solid #cbd5e1',
            boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
          }}>
            {/* Map Roads Vector */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <line x1="45" y1="0" x2="45" y2="190" stroke="#ffffff" strokeWidth="8" />
              <line x1="110" y1="0" x2="110" y2="190" stroke="#ffffff" strokeWidth="10" />
              <line x1="180" y1="0" x2="180" y2="190" stroke="#ffffff" strokeWidth="12" />
              <line x1="250" y1="0" x2="250" y2="190" stroke="#ffffff" strokeWidth="10" />
              <line x1="315" y1="0" x2="315" y2="190" stroke="#ffffff" strokeWidth="8" />

              <line x1="0" y1="35" x2="360" y2="35" stroke="#ffffff" strokeWidth="8" />
              <line x1="0" y1="75" x2="360" y2="75" stroke="#ffffff" strokeWidth="10" />
              <line x1="0" y1="120" x2="360" y2="120" stroke="#ffffff" strokeWidth="12" />
              <line x1="0" y1="165" x2="360" y2="165" stroke="#ffffff" strokeWidth="8" />
            </svg>

            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255,255,255,0.85)',
              padding: '2px 8px',
              borderRadius: '6px',
              fontSize: '9px',
              fontWeight: '800',
              color: '#64748b'
            }}>
              MAP
            </div>

            {/* Shelter Pin 1 (Green 'S') */}
            <div style={{
              position: 'absolute',
              left: '96px',
              top: '64px',
              width: '22px',
              height: '22px',
              backgroundColor: '#16a34a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              boxShadow: '0 2px 6px rgba(22,163,74,0.4)',
              border: '2px solid #ffffff'
            }}>
              S
            </div>

            {/* Shelter Pin 2 (Green 'S') */}
            <div style={{
              position: 'absolute',
              left: '196px',
              top: '90px',
              width: '22px',
              height: '22px',
              backgroundColor: '#16a34a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              boxShadow: '0 2px 6px rgba(22,163,74,0.4)',
              border: '2px solid #ffffff'
            }}>
              S
            </div>

            {/* Shelter Pin 3 (Green 'S') */}
            <div style={{
              position: 'absolute',
              left: '270px',
              top: '55px',
              width: '22px',
              height: '22px',
              backgroundColor: '#16a34a',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '10px',
              fontWeight: '800',
              boxShadow: '0 2px 6px rgba(22,163,74,0.4)',
              border: '2px solid #ffffff'
            }}>
              S
            </div>

            {/* User Current Location Pin (Orange dot) */}
            <div style={{
              position: 'absolute',
              left: '145px',
              top: '110px',
              width: '20px',
              height: '20px',
              backgroundColor: '#ea580c',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: '900',
              border: '2px solid #ffffff',
              boxShadow: '0 2px 6px rgba(234,88,12,0.45)'
            }}>
              •
            </div>
          </div>

          {/* Shelters List Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {shelters.map((item) => (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '14px 16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}
              >
                {/* Top Row: Name and Status Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>
                      {item.name}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}>
                      <span style={{ fontSize: '11px' }}>📍</span>
                      <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                        {item.distance}
                      </span>
                    </div>
                  </div>

                  {item.statusType === 'open' ? (
                    <span style={{
                      backgroundColor: '#dcfce7',
                      color: '#15803d',
                      fontSize: '10.5px',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}>
                      ✓ Open
                    </span>
                  ) : (
                    <span style={{
                      backgroundColor: '#ffedd5',
                      color: '#c2410c',
                      fontSize: '10px',
                      fontWeight: '800',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}>
                      ⚠️ Almost full
                    </span>
                  )}
                </div>

                {/* Occupancy Bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', marginBottom: '4px' }}>
                    <span style={{ color: '#64748b' }}>Occupancy</span>
                    <span style={{ color: '#0f172a' }}>{item.occupancy} / {item.totalCapacity}</span>
                  </div>
                  <div style={{ width: '100%', height: '5px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${item.percentage}%`,
                      height: '100%',
                      backgroundColor: item.barColor,
                      borderRadius: '4px'
                    }} />
                  </div>
                </div>

                {/* Facility Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        color: '#64748b',
                        fontSize: '10px',
                        fontWeight: '600',
                        padding: '3px 10px',
                        borderRadius: '8px'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Call & Get Directions */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '10px', marginTop: '2px' }}>
                  <a
                    href={`tel:${item.phone}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      padding: '9px 8px',
                      backgroundColor: '#ffffff',
                      border: '1.5px solid #e2e8f0',
                      borderRadius: '12px',
                      color: '#dc2626',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    <Phone size={13} strokeWidth={2.4} />
                    <span>{item.phone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => alert(`Navigating to ${item.name}...`)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      padding: '9px 12px',
                      backgroundColor: '#2563eb',
                      border: 'none',
                      borderRadius: '12px',
                      color: '#ffffff',
                      fontSize: '11.5px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '0 3px 8px rgba(37,99,235,0.25)'
                    }}
                  >
                    <span>Get Directions</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
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
          {/* HOME */}
          <div 
            onClick={() => onNavigateTab('home')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🏠</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>HOME</span>
          </div>

          {/* SOS */}
          <div 
            onClick={() => onNavigateTab('sos')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🆘</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>SOS</span>
          </div>

          {/* TRACK */}
          <div 
            onClick={() => onNavigateTab('track')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>📍</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>TRACK</span>
          </div>

          {/* SHELTERS ACTIVE */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>🏕️</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#dc2626', marginTop: '2px' }}>SHELTERS</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#dc2626', borderRadius: '4px', marginTop: '2px' }} />
          </div>

          {/* ALERTS */}
          <div 
            onClick={() => onNavigateTab('alerts')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>🔔</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>ALERTS</span>
          </div>
        </div>

      </div>
    </div>
  );
};