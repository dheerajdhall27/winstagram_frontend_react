import React from 'react';

const SearchListItem = ({select, hastagText, hashTagId}) =>
    <li onClick={select} key={hashTagId} className="list-group-item list-group-item-action">
        <div>
            {`#${hastagText}`}
        </div>
    </li>



export default SearchListItem
