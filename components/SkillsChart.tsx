import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { CHART_DATA } from '../constants';

const SkillsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={CHART_DATA}>
          <PolarGrid stroke="#bae6fd" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#0c4a6e', fontSize: 12, fontWeight: 600 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Will"
            dataKey="A"
            stroke="#0ea5e9"
            strokeWidth={3}
            fill="#7dd3fc"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
