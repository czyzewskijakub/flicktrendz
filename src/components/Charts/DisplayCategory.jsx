// import React, { useState, useCallback, useEffect } from 'react';

// import Spinner from 'react-bootstrap/Spinner';

// import Chart from './Chart';
// import Button from '../UI/Button';
// import classes from './DisplayCategory.module.css';

// import info from './Info';

// const DisplayCategory = (props) => {
//   const [fetchData, setFetchData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [prop, setProp] = useState(props.pickedCategory);

//   let url = 'http://localhost:5000/ai/statistics/describe?videoCategoryId=' + prop;

//   const fetchDataHandler = useCallback(async (u) => {
//     setIsLoading(true);
//     setProp(props.pickedCategory);
//     try {
//       const response = await fetch(`http://localhost:5000/ai/statistics/describe?videoCategoryId=${u}`);
//       if (!response.ok) {
//         throw new Error('Some went wrong!');
//       }
//       const data = await response.json();
//       setFetchData(data);
//     } catch (error) {
//       console.log(JSON.stringify(error));
//     }
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     fetchDataHandler(props.pickedCategory);
//   }, [fetchDataHandler, props.pickedCategory]);

//   const getData = () => {
//     setProp(props.pickedCategory)
//     url = 'http://localhost:5000/ai/statistics/describe?videoCategoryId='+ props.pickedCategory;
//     fetchDataHandler()
//     console.log(url)
//   }

//   let chartList = <p>No data provided.</p>;

//   if (isLoading) {
//     chartList = <Spinner animation="border" />;
//   }
//   if (fetchData && props.pickedCategory) {
//     // console.log(fetchData.VideoCommentCount);
//     let i = 0;
//     chartList = info.map((category) => (
//       <Chart key={i++} data={fetchData[`${category}`]} />
//     ));
//   }

//   console.log(+props.pickedCategory);

//   return (
//     <React.Fragment>
//       <div className={classes.center}>
//         <Button onClick={getData} type="submit" className={classes.btn}>
//           Filter
//         </Button>
//       </div>
//       <div className={classes['grid-container']}>{chartList}</div>
//     </React.Fragment>
//   );
// };

// export default DisplayCategory;
import React, { useState, useCallback, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Chart from './Chart';
import Button from '../UI/Button';
import classes from './DisplayCategory.module.css';
import info from './Info';

const DisplayCategory = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [prop, setProp] = useState(props.pickedCategory);

  const url = `http://localhost:5000/ai/statistics/describe?videoCategoryId=${prop}`;

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  const getData = () => {
    setProp(props.pickedCategory);
    fetchDataHandler();
  };

  let chartList = <p>No data provided.</p>;

  if (isLoading) {
    chartList = <Spinner animation="border" />;
  } else if (fetchData && props.pickedCategory) {
    let i = 0;
    chartList = info.map((category) => (
      <Chart key={i++} data={fetchData[category]} />
    ));
  }

  return (
    <React.Fragment>
      <div className={classes.center}>
        <Button onClick={getData} type="submit" className={classes.btn}>
          Filter
        </Button>
      </div>
      <div className={classes['grid-container']}>{chartList}</div>
    </React.Fragment>
  );
};

export default DisplayCategory;
