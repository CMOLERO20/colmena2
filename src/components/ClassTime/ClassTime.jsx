import { useEffect, useMemo  }  from 'react';

const ClassTime = (props) => {
    const { date, locale = 'en-US' } = props;
    
    const display = useMemo(() => (
      new Date(date).toLocaleDateString(locale)
    ), [date]);
    
    const tooltip = useMemo(() => (
      new Date(date).toLocaleString(locale, {
        dateStyle: 'full',
        timeStyle: 'full'
      })
    ), [date]);
    
    return (
      <div className="class-date" title={tooltip}>{display}</div>
    )
  };

  export default ClassTime