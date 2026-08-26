import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Flame, 
  Waves, 
  HeartPulse, 
  Home, 
  AlertCircle,
  Plus,
  Minus,
  Navigation,
  Signal,
  Wifi,
  BatteryMedium,
  User,
  Truck
} from 'lucide-react';

interface ReportEmergencyScreenProps {
  onBack: () => void;
  onSubmitSuccess: (data: any) => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const ReportEmergencyScreen: React.FC<ReportEmergencyScreenProps> = ({ 
  onBack, 
  onSubmitSuccess,
  onSwitchRole 
}) => {
  const [incidentType, setIncidentType] = useState('Medical Assistance');
  const [severity, setSeverity] = useState('Critical');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Main Street, Ratnapura, Sri Lanka');

  const emergencyTypes = [
    { id: 'Medical Assistance', label: 'Medical Assistance', icon: HeartPulse, color: '#ef4444' },
    { id: 'Flood Rescue', label: 'Flood Rescue', icon: Waves, color: '#3b82f6' },
    { id: 'Fire Outbreak', label: 'Fire Outbreak', icon: Flame, color: '#f97316' },
    { id: 'Landslide / Structural Collapse', label: 'Landslide Rescue', icon: Home, color: '#8b5cf6' },
    { id: 'Other Incident', label: 'Other Incident', icon: AlertCircle, color: '#64748b' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitSuccess({
      type: incidentType,
      severity,
      peopleAffected: { adults, children },
      description,
      location: { address: location }
    });
  };

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

        {/* Scrollable Form Body */}
        <div style={{
          flex: 1,
          padding: '10px 20px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>

          {/* Nav Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '2px' }}>
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
            <h2 style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>
              Report Emergency
            </h2>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            
            {/* 1. Incident Type */}
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Incident Type
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginTop: '6px' }}>
                {emergencyTypes.map((item) => {
                  const Icon = item.icon;
                  const isSelected = incidentType === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setIncidentType(item.id)}
                      style={{
                        backgroundColor: isSelected ? '#fee2e2' : '#ffffff',
                        border: isSelected ? '2px solid #dc2626' : '1px solid #e2e8f0',
                        borderRadius: '14px',
                        padding: '10px 8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                    >
                      <Icon size={20} color={isSelected ? '#dc2626' : item.color} />
                      <span style={{ fontSize: '11px', fontWeight: '700', color: isSelected ? '#dc2626' : '#1e293b', textAlign: 'center' }}>
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Severity Level */}
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Severity Level
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginTop: '6px' }}>
                {['Critical', 'Moderate', 'Low'].map((level) => {
                  const isSelected = severity === level;
                  let activeBg = '#fee2e2';
                  let activeColor = '#dc2626';
                  if (level === 'Moderate') { activeBg = '#ffedd5'; activeColor = '#ea580c'; }
                  if (level === 'Low') { activeBg = '#dcfce7'; activeColor = '#16a34a'; }

                  return (
                    <button
                      key={level}
                      type="button"
                      onClick={() => setSeverity(level)}
                      style={{
                        backgroundColor: isSelected ? activeBg : '#ffffff',
                        border: isSelected ? `2px solid ${activeColor}` : '1px solid #e2e8f0',
                        color: isSelected ? activeColor : '#475569',
                        padding: '8px 0',
                        borderRadius: '12px',
                        fontWeight: '800',
                        fontSize: '11.5px',
                        cursor: 'pointer'
                      }}
                    >
                      {level}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. People Affected */}
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                People Affected
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '6px' }}>
                
                {/* Adults Counter */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Adults</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>{adults}</span>
                    <button
                      type="button"
                      onClick={() => setAdults(adults + 1)}
                      style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Children Counter */}
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Children</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Minus size={12} />
                    </button>
                    <span style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>{children}</span>
                    <button
                      type="button"
                      onClick={() => setChildren(children + 1)}
                      style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid #cbd5e1', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* 4. Live GPS Location */}
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Incident Location
              </label>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '6px'
              }}>
                <MapPin size={16} color="#dc2626" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#0f172a'
                  }}
                />
                <button
                  type="button"
                  onClick={() => setLocation('Main Street, Ratnapura, Sri Lanka')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb' }}
                  title="Detect GPS"
                >
                  <Navigation size={15} />
                </button>
              </div>
            </div>

            {/* 5. Additional Notes */}
            <div>
              <label style={{ fontSize: '11px', fontWeight: '800', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Additional Details (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="E.g., Rising flood water level around house, power failure..."
                rows={2}
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  padding: '10px 12px',
                  fontSize: '11.5px',
                  outline: 'none',
                  marginTop: '6px',
                  resize: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Submit SOS Button */}
            <button
              type="submit"
              style={{
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '16px',
                padding: '14px 0',
                fontSize: '14px',
                fontWeight: '900',
                letterSpacing: '0.4px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(220, 38, 38, 0.4)',
                marginTop: '4px'
              }}
            >
              SEND EMERGENCY SOS
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};