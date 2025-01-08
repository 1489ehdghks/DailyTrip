'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Calendar, X } from 'lucide-react';

interface Task {
  id: number;
  content: string;
  completed: boolean;
  time?: string;
}

export default function CompanyPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          content: newTask,
          completed: false,
          time: newTime
        }
      ]);
      setNewTask('');
      setNewTime('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Today's Schedule</h1>

        {/* 새 태스크 입력 폼 */}
        <motion.div 
          className="max-w-2xl mx-auto mb-12 glass-card p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex gap-4 mb-4">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="새로운 일정 추가..."
              className="flex-1 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addTask}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              <Plus size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* 태스크 리스트 */}
        <div className="max-w-2xl mx-auto space-y-4">
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className={`glass-card p-4 flex items-center gap-4 ${
                task.completed ? 'bg-gray-50' : ''
              }`}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 rounded-full border-2 border-primary checked:bg-primary"
              />
              <div className="flex-1">
                <div className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.content}
                </div>
                {task.time && (
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar size={14} />
                    {task.time}
                  </div>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeTask(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 