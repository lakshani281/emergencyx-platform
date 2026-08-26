import React, { useState } from 'react';
import { 
  Signal, 
  Wifi, 
  BatteryMedium, 
  User, 
  Truck, 
  MapPin, 
  Users, 
  Clock, 
  Map, 
  CheckSquare 
} from 'lucide-react';

interface ResponderTasksScreenProps {
  onNavigateTab: (tab: 'dashboard' | 'incidents' | 'tasks' | 'alerts') => void;
  onSwitchRole?: (role: 'citizen' | 'responder') => void;
}

export const ResponderTasksScreen: React.FC<ResponderTasksScreenProps> = ({
  onNavigateTab,
  onSwitchRole
}) => {
  const [tasks, setTasks] = useState([
    {
      id: '#EX-2847',
      title: 'Medical Emergency',
      status: 'En Route',
      statusBadgeBg: '#eff6ff',
      statusBadgeColor: '#2563eb',
      location: 'Main Street, Ratnapura',
      people: '3 people',
      severity: 'Critical',
      severityBg: '#fee2e2',
      severityColor: '#dc2626',
      assignedTime: '09:41 AM',
      currentStep: 2,
      actionBtnText: '→ Mark as Arrived'
    },
    {
      id: '#EX-2831',
      title: 'Evacuation',
      status: 'Arrived',
      statusBadgeBg: '#ecfdf5',
      statusBadgeColor: '#059669',
      location: 'Pelmadulla, Sabaragamuwa',
      people: '5 people',
      severity: 'Moderate',
      severityBg: '#ffedd5',
      severityColor: '#ea580c',
      assignedTime: '08:55 AM',
      currentStep: 3,
      actionBtnText: '→ Mark as Resolved'
    }
  ]);

  const completedToday = [
    { id: 'EX-2801', title: 'Kalu Ganga Flood Rescue', time: '2 hr ago' },
    { id: 'EX-2789', title: 'Ferguson Shelter Evacuation', time: '4 hr ago' },
  ];

  const handleNextStep = (taskId: string) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        if (task.currentStep === 2) {
          return {
            ...task,
            currentStep: 3,
            status: 'Arrived',
            statusBadgeBg: '#ecfdf5',
            statusBadgeColor: '#059669',
            actionBtnText: '→ Mark as Resolved'
          };
        } else if (task.currentStep === 3) {
          return {
            ...task,
            currentStep: 4,
            status: 'Resolved',
            statusBadgeBg: '#f1f5f9',
            statusBadgeColor: '#475569',
            actionBtnText: 'Completed ✓'
          };
        }
      }
      return task;
    }));
  };

  const stepsList = ['Assigned', 'En Route', 'Arrived', 'Resolved'];

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

        {/* Scrollable Tasks Body */}
        <div style={{
          flex: 1,
          padding: '10px 18px 12px 18px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>

          {/* Header Title with 2 Active Badge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px', marginBottom: '2px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
              My Tasks
            </h2>
            <span style={{
              backgroundColor: '#eff6ff',
              color: '#2563eb',
              fontSize: '11px',
              fontWeight: '800',
              padding: '3px 10px',
              borderRadius: '9999px'
            }}>
              2 Active
            </span>
          </div>

          {/* Active Tasks List */}
          {tasks.map((task) => (
            <div
              key={task.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '16px',
                border: '1.5px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', fontWeight: '800', color: '#2563eb' }}>
                  {task.id}
                </span>
                <span style={{
                  backgroundColor: task.statusBadgeBg,
                  color: task.statusBadgeColor,
                  fontSize: '11px',
                  fontWeight: '800',
                  padding: '3px 10px',
                  borderRadius: '9999px'
                }}>
                  {task.status}
                </span>
              </div>

              <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginTop: '-2px' }}>
                {task.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', color: '#475569', fontWeight: '600' }}>
                <MapPin size={14} color="#e11d48" />
                <span>{task.location}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '11.5px', color: '#64748b', fontWeight: '600' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={13} color="#475569" />
                  <span>{task.people}</span>
                </div>
                <span>·</span>
                <span style={{
                  backgroundColor: task.severityBg,
                  color: task.severityColor,
                  fontSize: '10px',
                  fontWeight: '800',
                  padding: '1px 8px',
                  borderRadius: '6px'
                }}>
                  {task.severity}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>
                <Clock size={12} />
                <span>Assigned {task.assignedTime}</span>
              </div>

              {/* Progress Steps Horizontal Bar */}
              <div style={{ marginTop: '4px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', marginBottom: '4px' }}>
                  {stepsList.map((step, idx) => {
                    const stepNumber = idx + 1;
                    const isPassedOrCurrent = stepNumber <= task.currentStep;
                    return (
                      <div
                        key={step}
                        style={{
                          height: '5px',
                          borderRadius: '4px',
                          backgroundColor: isPassedOrCurrent ? '#2563eb' : '#f1f5f9'
                        }}
                      />
                    );
                  })}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
                  {stepsList.map((step, idx) => {
                    const stepNumber = idx + 1;
                    const isPassedOrCurrent = stepNumber <= task.currentStep;
                    return (
                      <span
                        key={step}
                        style={{
                          fontSize: '9px',
                          fontWeight: isPassedOrCurrent ? '700' : '500',
                          color: isPassedOrCurrent ? '#1e293b' : '#94a3b8'
                        }}
                      >
                        {step}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '8px', marginTop: '4px' }}>
                <button
                  type="button"
                  onClick={() => handleNextStep(task.id)}
                  disabled={task.currentStep >= 4}
                  style={{
                    backgroundColor: task.currentStep >= 4 ? '#10b981' : '#2563eb',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '14px',
                    padding: '12px 0',
                    fontSize: '12.5px',
                    fontWeight: '800',
                    cursor: task.currentStep >= 4 ? 'default' : 'pointer',
                    boxShadow: '0 4px 12px rgba(37,99,235,0.25)',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {task.actionBtnText}
                </button>

                <button
                  type="button"
                  style={{
                    backgroundColor: '#ffffff',
                    color: '#334155',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Map size={16} strokeWidth={2.4} />
                </button>
              </div>

            </div>
          ))}

          {/* Completed Today Section */}
          <div style={{ marginTop: '6px' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: '800',
              color: '#64748b',
              letterSpacing: '0.6px',
              marginBottom: '8px',
              textTransform: 'uppercase'
            }}>
              COMPLETED TODAY
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {completedToday.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '12px 14px',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                >
                  <div style={{
                    width: '28px',
                    height: '28px',
                    backgroundColor: '#ecfdf5',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981'
                  }}>
                    <CheckSquare size={16} strokeWidth={2.5} />
                  </div>

                  <div>
                    <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#475569' }}>
                      {item.id} · {item.title}
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#94a3b8', fontWeight: '500', marginLeft: '6px' }}>
                      · {item.time}
                    </span>
                  </div>
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
          <div 
            onClick={() => onNavigateTab('dashboard')}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer', opacity: 0.7 }}
          >
            <span style={{ fontSize: '18px' }}>📊</span>
            <span style={{ fontSize: '9px', fontWeight: '700', color: '#64748b', marginTop: '2px' }}>DASHBOARD</span>
          </div>

          <div 
            onClick={() => onNavigateTab('incidents')}
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

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '18px' }}>✅</span>
            <span style={{ fontSize: '9px', fontWeight: '800', color: '#2563eb', marginTop: '2px' }}>TASKS</span>
            <div style={{ width: '16px', height: '2.5px', backgroundColor: '#2563eb', borderRadius: '4px', marginTop: '2px' }} />
          </div>

          <div 
            onClick={() => onNavigateTab('alerts')}
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