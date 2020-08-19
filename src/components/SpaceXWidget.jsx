import React from "react"

const SpaceXWidget = ({ data }) => {
  return (
    <div className="spaceX__widget" data-testid="spaceComponent">
      <div className="spaceX_image">
        <img src={data.links.mission_patch} alt="space_logo" />
      </div>
      <div className="spaceX__title an-16 medium-text primary--text py10">
        {data.mission_name} {`#${data.flight_number}`}
      </div>
      <div className="missing__ids" data-testid="mission-list">
        <strong>Missing Ids:</strong>
        <ul className="primary--text my5">
          {data.mission_id.map((mid, index) => (<li key={index}>{mid}</li>))}
        </ul>
      </div>
      <div>
        <strong>Launch Year:</strong>
        <span className="primary--text ml5">{data.launch_year}</span>
      </div>
      <div>
        <strong>Successfull Launch:</strong>
        <span className="primary--text ml5">{data.launch_success ? "True" : "False"}</span>
      </div>
      <div>
        <strong>Successfull Landing:</strong>
        <span className="primary--text ml5">{"199"}</span>
      </div>
    </div>
  )
}

export default SpaceXWidget
