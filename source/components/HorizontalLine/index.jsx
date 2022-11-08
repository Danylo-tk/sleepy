import { Container, DayNumber, HoursList, Hour } from "./components";

const HorizontalLine = () => {
  return (
    <Container>
      <DayNumber>8 | 11</DayNumber>
      <HoursList>
        <Hour>21</Hour>
        <Hour>22</Hour>
        <Hour>23</Hour>
        <Hour>24</Hour>
        <Hour>1</Hour>
        <Hour>2</Hour>
        <Hour>3</Hour>
        <Hour>4</Hour>
      </HoursList>
    </Container>
  );
};

export default HorizontalLine;
