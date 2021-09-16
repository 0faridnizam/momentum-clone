import React, { useEffect, useState } from 'react';
import getListbg from './getListbg';
import styled from 'styled-components';

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;

const SpanLocation = styled.span`
  opacity: 0.7;
  transition: opacity 0.3s ease-in;
  font-style: italic;
  font-size: 18px;
  font-weight: 300;
  position: absolute;
  bottom: 25px;
  left: 25px;
  color: white;
  cursor: default;
  &:hover {
    // font-style: normal;
    opacity: 100;
  }
`;

export default function PhotoList() {
  const [List, setList] = useState(null);

  useEffect(() => {
    const getfetch = async () => {
      const data = await getListbg();
      setList(data);
    };
    getfetch();
  }, []);

  if (!List) {
    return null;
  }
  // Image
  const ParamUrl = '&fm=webp&q=75&auto=compress&,enhance&dpr=2'; // Read here https://unsplash.com/documentation#supported-parameters
  const fullUrl = List[0].urls.regular + ParamUrl;

  // Location
  const getLoc = List[0].location;
  const city = getLoc.city;
  const country = getLoc.country;
  const name = List[0].user.name;
  const location = name + ', 📍' + city + ', ' + country;

  return (
    <>
      <Img src={fullUrl} />
      <SpanLocation>{location}</SpanLocation>
    </>
  );
}
