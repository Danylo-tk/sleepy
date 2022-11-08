import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const DayNumber = styled.span`
  margin: auto;
  border: 2px solid magenta;
`;

const HoursList = styled.ul`
  display: flex;
  list-style: none;
  border: 2px solid orange;
`;

const Hour = styled.li`
  padding: 0 0.6rem;
  border: 2px solid navy;
`;

export { Container, DayNumber, HoursList, Hour };
