import React from 'react'

import PersonalSummary from '../myprofile/PersonalSummary';
import EducationalSummary from '../myprofile/EducationalSummary';
import ProjectsSummary from '../myprofile/ProjectsSummary';
import ExperianceSummary from '../myprofile/ExperianceSummary';
import TechnicalSkills from '../myprofile/TechnicalSkills';
import Awards from '../myprofile/Awards';

class Body extends React.Component {
    render() {
        var tags = <div>
            <PersonalSummary></PersonalSummary>
            <EducationalSummary> </EducationalSummary>
            <ExperianceSummary></ExperianceSummary>
            <TechnicalSkills> </TechnicalSkills>
            <Awards></Awards>
            <ProjectsSummary> </ProjectsSummary>
        </div>

        return(tags)
    }
}

export default Body