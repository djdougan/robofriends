import React from 'react';



const Card = ({name, email, id}) => {
    // const {name, email, src} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 ">
            <img alt={name} src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2 className="tc">{name}</h2>
                <p className="tc">{email}</p>
            </div>
        </div>
    );
};

export default Card;