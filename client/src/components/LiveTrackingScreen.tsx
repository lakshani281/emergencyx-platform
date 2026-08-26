import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Navigation, 
  Radio, 
  Clock, 
  Signal, 
  Wifi, 
  BatteryMedium,
  User,
  Truck
} from 'lucide-react';

interface LiveTrackingScreenProps {
  onBack: () => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
  requestId?: string;
}

export const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({ 
  onBack, 
  onSwitchRole,
  requestId = '#EX-2847' 
}) => {
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

        {/* Map & Live Tracking Area */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>

          {/* Header Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
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
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>Live Rescue Tracking</h3>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>Request {requestId}</span>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              fontSize: '10px',
              fontWeight: '800',
              padding: '4px 10px',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Radio size={12} className="animate-pulse" />
              <span>LIVE GPS</span>
            </div>
          </div>

          {/* Graphical Map Representation */}
          <div style={{
            width: '100%',
            height: '240px',
            backgroundColor: '#e2f0d9',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid #cbd5e1',
            boxShadow: '0 4px 14px rgba(0,0,0,0.05)'
          }}>
            {/* Road Vectors */}
            <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
              <line x1="60" y1="0" x2="60" y2="240" stroke="#ffffff" strokeWidth="12" />
              <line x1="180" y1="0" x2="180" y2="240" stroke="#ffffff" strokeWidth="16" />
              <line x1="300" y1="0" x2="300" y2="240" stroke="#ffffff" strokeWidth="10" />

              <line x1="0" y1="50" x2="360" y2="50" stroke="#ffffff" strokeWidth="10" />
              <line x1="0" y1="120" x2="360" y2="120" stroke="#ffffff" strokeWidth="16" />
              <line x1="0" y1="190" x2="360" y2="190" stroke="#ffffff" strokeWidth="12" />

              {/* Sri Lankan River Vector (Kalu Ganga simulation) */}
              <path d="M 0 210 Q 120 180 240 220 T 360 210" fill="none" stroke="#bae6fd" strokeWidth="20" opacity="0.8" />

              {/* Planned Rescue Route */}
              <path d="M 80 60 L 180 120 L 260 170" fill="none" stroke="#2563eb" strokeWidth="5" strokeDasharray="6 6" />
            </svg>

            {/* Responder Vehicle Pin (Moving) */}
            <div style={{
              position: 'absolute',
              left: '70px',
              top: '48px',
              width: '34px',
              height: '34px',
              backgroundColor: '#2563eb',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(37,99,235,0.4)',
              border: '2px solid #ffffff'
            }}>
              <Truck size={16} strokeWidth={2.5} />
            </div>

            {/* Citizen SOS Location Pin */}
            <div style={{
              position: 'absolute',
              left: '246px',
              top: '154px',
              width: '38px',
              height: '38px',
              backgroundColor: 'rgba(220, 38, 38, 0.25)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#dc2626',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                border: '2px solid #ffffff'
              }}>
                <MapPin size={14} />
              </div>
            </div>
          </div>

          {/* ETA Metrics Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '14px 16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            <div>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>ESTIMATED ARRIVAL</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <Clock size={16} color="#2563eb" />
                <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>6 mins</h3>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700' }}>DISTANCE</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px', justifyContent: 'flex-end' }}>
                <Navigation size={14} color="#16a34a" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>1.2 km</h4>
              </div>
            </div>
          </div>

          {/* Responder Profile Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '14px 16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                backgroundColor: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                border: '1.5px solid #dbeafe'
              }}>
                👨‍🚒
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <h4 style={{ fontSize: '13.5px', fontWeight: '800', color: '#0f172a' }}>Kasun Perera</h4>
                  <ShieldCheck size={14} color="#2563eb" />
                </div>
                <p style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', marginTop: '1px' }}>
                  Sabaragamuwa Rescue Unit #4
                </p>
              </div>
            </div>

            <a
              href="tel:112"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#16a34a',
                color: '#ffffff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 10px rgba(22,163,74,0.3)'
              }}
            >
              <Phone size={18} strokeWidth={2.4} />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};