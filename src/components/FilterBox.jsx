import React from "react";
import { withRouter } from 'react-router-dom';
import { getQueryObj } from "Helper";

const FilterBox = (props) => {
  const { location: { search } } = props;
  const params = search.split('?')[1];
  const data = params ? getQueryObj(params) : null;
  const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];
  return (
    <div className="filter__box fill-height" data-testid="filterComponent">
      <div className="box__title an-14 bold-text">Filters</div>
      <div className="label__underlined pt5">Launch Year</div>
      <div className="label__container" data-testid="filter-years">
        {
          years.map((d, i) => (
            <div key={d} className={i % 2 !== 0 ? 'text-right py5' : 'py5'} onClick={() => props.onYearClick(d)}>
              <div className={`${(data && data['launch_year'] && parseInt(data['launch_year']) === d) ? 'year__label__solid' :'year__label'}`}>
                {d}
              </div> 
            </div>
        ))
        }
      </div>
      <div className="label__underlined pt5">Successful Launch</div>
      <div className="label__container">
        <div>
          <div 
            onClick={() => props.onLaunchSuccessClick(true)} 
            className={`${(data && data['launch_success'] && data['launch_success'] === "true") ? 'year__label__solid' : 'year__label'}`}>
              True
          </div>
        </div>
        <div className="text-right">
          <div onClick={() => props.onLaunchSuccessClick(false)} 
            className={`${(data && data['launch_success'] && data['launch_success'] === "false") ? 'year__label__solid' : 'year__label'}`}>
              False
          </div>
        </div>
      </div>
      <div className="label__underlined pt5">Successful Landing</div>
      <div className="label__container">
        <div>
          <div 
            onClick={() => props.onLandSuccessClick(true)} 
            className={`${(data && data['land_success'] && data['land_success'] === "true") ? 'year__label__solid' : 'year__label'}`}>
              True
          </div>
        </div>
        <div className="text-right">
          <div 
            onClick={() => props.onLandSuccessClick(false)} 
            className={`${(data && data['land_success'] && data['land_success'] === "false") ? 'year__label__solid' : 'year__label'}`}>
              False
          </div>
        </div>
      </div>
    </div >
  )
}

export default withRouter(FilterBox);
