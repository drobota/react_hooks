import * as React from 'react';
import styled from '@emotion/styled';

import { ICON_COLOR, GRAY_COLOR} from '../constants/colors';

interface BulletedListProps {
  title: string;
  items?: string[];
}

const BulletedList: React.FC<BulletedListProps> = (props) => {
  const buildItem = (item: string): React.ReactNode => {
    return <Item key={item}><Icon>-</Icon>{item}</Item>
  };
  
  const buildItems = (): React.ReactNode => {
    return props.items?.map(buildItem);
  };
  
  return (
    <>
      <Title><Icon>&#9679;</Icon>{ props.title }</Title>
      <Items>
        { buildItems() }
      </Items>
    </>
  );
};


const Title = styled.div({
  fontSize: '4rem',
  padding: '2rem',
  color: GRAY_COLOR,
  fontWeight: 'bold',
});

const Items = styled.ul({
  listStyle: 'none',
  margin: 0,
  fontSize: '3rem',
  paddingLeft: '5rem'
});

const Item = styled.li({
  color: GRAY_COLOR,
  
});

const Icon = styled.span({
  paddingRight: '1rem',
  color: ICON_COLOR,
});

export default BulletedList;