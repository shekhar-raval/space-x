import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import "assets/scss/app.scss";

import FilterBox from "components/FilterBox";
import SpaceXWidget from "components/SpaceXWidget";
import { getQueryString } from "Helper";

const BASE_API = 'https://api.spaceXdata.com/v3/launches?limit=100'

function App(props) {
  const { history } = props;

  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});
  const [loading, setLoading] = useState(false);

  const getAllData = useCallback(async (value = '') => {
    try {
      setLoading(true)
      const res = await fetch(BASE_API + value) 
      const details = await res.json();
      setData(details);
      setLoading(false);
    } catch (err) {
    }
  }, []);

  useEffect(() => {
    const { search } = props.location;
    const searchParams = search ? search.replace('?', '&') : ''
    getAllData(searchParams);
  }, [props, getAllData])

  const onYearClick = (year) => {
    const newQuery = { ...query, launch_year: year }
    setQuery(newQuery);
    history.push(getQueryString(newQuery));
  }

  const onLandSuccessClick = (success) => {
    const newQuery = { ...query, land_success: success }
    setQuery(newQuery);
    history.push(getQueryString(newQuery));
  }

  const onLaunchSuccessClick = (success) => {
    const newQuery = { ...query, launch_success: success }
    setQuery(newQuery);
    history.push(getQueryString(newQuery));
  }

  return (
    <div className="application-container pa10">
      <div className="an-18 bold-text pb10">SpaceX Launch Program</div>
      <div className="flex-x spaceX-container">
        <FilterBox
          onLaunchSuccessClick={onLaunchSuccessClick}
          onLandSuccessClick={onLandSuccessClick}
          onYearClick={onYearClick}
        />
        <div className="space-widgets-container flex-1 pl10">
          {
            !loading ?
            data.length ?  
            data.map((d, i) => (<SpaceXWidget key={i} data={d} />)) :
            <div className="text-center">No Mission Found !!!</div>:
            <div className="text-center">Getting data please wait...</div>
          }
        </div>
      </div>
      <div className="text-center py10">
        <strong>Develop by:</strong> <span>Shekhar Raval</span>
      </div>
    </div>
  )
}

export default withRouter(App); 
