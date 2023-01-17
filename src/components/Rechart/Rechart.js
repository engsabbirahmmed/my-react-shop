import React from 'react';
import { BarChart, Bar,  XAxis, YAxis,  Tooltip} from 'recharts';

const Rechart = () => {
    const data = [
        {
            name: 'Computer Science Basics',
            totalMark: 200,
            mark: 180,
        },
        {
            name: 'Digital Electronics',
            totalMark: 170,
            mark: 158,
        },
        {
            name: 'Computer Graphics',
            totalMark: 210,
            mark: 188,
        },
        {
            name: 'Visual Programming & Visual Basics',
            totalMark: 130,
            mark: 121,
        },
        {
            name: 'System Software',
            totalMark: 180,
            mark: 160,
        },
        {
            name: 'Operating System',
            totalMark: 180,
            mark: 165,
        },
        {
            name: 'Data Mining',
            totalMark: 150,
            mark: 130,
        },
    ];
    return (
        <div>
            <h1 className='text-5xl font-semibold underline mt-12'>Recharts</h1>
            <BarChart height={500} width={500} data={data} margin={{ top: 100, right: 50, left: 70, bottom: 5 }}>
                <Bar margin={{ top: 100, right: 50, left: 70, bottom: 5 }} dataKey='mark' fill='pink' />
                <Bar margin={{ top: 100, right: 50, left: 70, bottom: 5 }} dataKey='totalMark' fill='hotPink' />
                <XAxis className='p-6 gap-8' dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Rechart;