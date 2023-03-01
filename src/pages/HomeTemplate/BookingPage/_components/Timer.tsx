import * as React from 'react';

export interface ITimerProps {
}

export function Timer(props: ITimerProps) {
    const [time, setTime] = React.useState({
        hour: 0,
        minute: 0,
        second: 0,
    })
         React.useEffect(() => {
        let timer = setInterval(() => {
            const date = new Date();
            setTime({
                hour:date.getHours(),
                minute:date.getMinutes(),
                second:date.getSeconds(),
            })
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    },[])
    return (
        <div className='text-center'>
            <h3>Thời gian đặt vé</h3>
            <span>{time.hour}:{time.minute}:{time.second}</span>
        </div>
    );
}
