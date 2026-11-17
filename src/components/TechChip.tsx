import React from 'react';
import { motion } from 'motion/react';
import {
  Coffee,
  Hash,
  Cpu,
  Terminal,
  Braces,
  Code,
  Palette,
  Boxes,
  Server,
  Database,
  Table,
  Network,
  Zap,
  Repeat,
  Kanban,
  ShieldCheck,
  Bug,
  GitBranch,
  Wrench,
  ClipboardList,
  Columns3,
  Calendar,
  Sparkles,
  FileText,
  Users,
  CheckSquare,
  Workflow,
  Target,
  Layers,
} from 'lucide-react';

interface TechChipProps {
  name: string;
  featured?: boolean;
  icon?: string;
}

export const TechChip: React.FC<TechChipProps> = ({ name, featured = false, icon }) => {
  const getIcon = () => {
    switch (icon || name.toLowerCase()) {
      case 'coffee':
      case 'java':
        return <Coffee className="w-3.5 h-3.5 text-accent" />;
      case 'hash':
      case 'c#':
        return <Hash className="w-3.5 h-3.5 text-accent" />;
      case 'cpu':
      case 'c++':
      case 'computer systems':
        return <Cpu className="w-3.5 h-3.5 text-accent" />;
      case 'terminal':
      case 'python':
        return <Terminal className="w-3.5 h-3.5 text-accent" />;
      case 'braces':
      case 'javascript':
        return <Braces className="w-3.5 h-3.5 text-accent" />;
      case 'code':
      case 'html':
        return <Code className="w-3.5 h-3.5 text-accent" />;
      case 'palette':
      case 'css':
        return <Palette className="w-3.5 h-3.5 text-accent" />;
      case 'boxes':
      case 'bootstrap':
        return <Boxes className="w-3.5 h-3.5 text-accent" />;
      case 'server':
      case 'asp.net':
        return <Server className="w-3.5 h-3.5 text-accent" />;
      case 'database':
      case 'sql':
        return <Database className="w-3.5 h-3.5 text-accent" />;
      case 'table':
      case 'database design':
        return <Table className="w-3.5 h-3.5 text-accent" />;
      case 'network':
      case 'data modelling':
      case 'networking concepts':
        return <Network className="w-3.5 h-3.5 text-accent" />;
      case 'zap':
      case 'basic database optimisation':
        return <Zap className="w-3.5 h-3.5 text-accent" />;
      case 'repeat':
      case 'sdlc':
        return <Repeat className="w-3.5 h-3.5 text-accent" />;
      case 'kanban':
      case 'agile / scrum':
        return <Kanban className="w-3.5 h-3.5 text-accent" />;
      case 'shield-check':
      case 'software testing':
        return <ShieldCheck className="w-3.5 h-3.5 text-accent" />;
      case 'bug':
      case 'debugging':
        return <Bug className="w-3.5 h-3.5 text-accent" />;
      case 'git-branch':
      case 'git / github':
        return <GitBranch className="w-3.5 h-3.5 text-accent" />;
      case 'wrench':
      case 'netbeans ide':
        return <Wrench className="w-3.5 h-3.5 text-accent" />;
      case 'clipboard-list':
      case 'jira':
        return <ClipboardList className="w-3.5 h-3.5 text-accent" />;
      case 'columns':
      case 'trello':
        return <Columns3 className="w-3.5 h-3.5 text-accent" />;
      case 'calendar':
      case 'microsoft project':
      case 'sprint planning':
        return <Calendar className="w-3.5 h-3.5 text-accent" />;
      case 'file-text':
      case 'requirements gathering':
      case 'functional specifications':
      case 'technical documentation':
        return <FileText className="w-3.5 h-3.5 text-accent" />;
      case 'check-square':
      case 'user stories & acceptance criteria':
        return <CheckSquare className="w-3.5 h-3.5 text-accent" />;
      case 'workflow':
      case 'process mapping & workflows':
      case 'process mapping':
      case 'workflow design':
        return <Workflow className="w-3.5 h-3.5 text-accent" />;
      case 'target':
      case 'gap analysis':
        return <Target className="w-3.5 h-3.5 text-accent" />;
      case 'layers':
      case 'systems analysis':
        return <Layers className="w-3.5 h-3.5 text-accent" />;
      case 'users':
      case 'stakeholder communication':
      case 'client coordination':
      case 'cross-functional collaboration':
        return <Users className="w-3.5 h-3.5 text-accent" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-accent" />;
    }
  };

  if (featured) {
    return (
      <motion.span
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-semibold text-accent bg-accent-soft border border-accent/40 rounded-xl shadow-xs hover:border-accent transition-colors duration-180 cursor-default"
      >
        <span className="p-1 rounded-md bg-surface shadow-xs flex items-center justify-center">
          {getIcon()}
        </span>
        <span className="font-bold">{name}</span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent bg-surface px-1.5 py-0.5 rounded border border-accent/30 font-bold">
          Focus
        </span>
      </motion.span>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium text-text-body bg-surface border border-border rounded-xl hover:border-accent hover:text-text-primary shadow-xs transition-colors duration-180 cursor-default"
    >
      <span className="flex items-center justify-center">
        {getIcon()}
      </span>
      <span>{name}</span>
    </motion.span>
  );
};
