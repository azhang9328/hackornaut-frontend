import React, {Fragment} from 'react'

const ResultCard = props => {
    const {result} = props
    return(
        <Fragment>
            <div>
                {result.name}
                {result.title}
                {result.domain}
                {result.breach_date}
                {result.pwn_count}
                {result.description}
                {result.data_classes}
                {result.is_spam_list}
                {result.logo_path}
            </div>
        </Fragment>
    )
}

export default ResultCard