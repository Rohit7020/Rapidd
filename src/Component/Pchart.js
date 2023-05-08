import React from 'react';
import { PieChart, Pie} from 'recharts';

const Pchart = (amap) => {
    const data1 = amap.amap
    const data2 = amap.amap
    return (
        <PieChart width={700} height={700}>

            <Pie
                data={data1}  dataKey="ttime"  label outerRadius={150} fill="#3453d8" />
            <Pie
                data={data2}  dataKey="ttime" outerRadius={120} fill="#8884d8" />
        </PieChart>
    );
}

export default Pchart;