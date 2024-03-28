import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import CscNotice from "./CscContent/CscNotice";
import CscQna from "./CscContent/CScQna";
import CscBtn from "./CscContent/CscBtn";
import CscVc from "./CscContent/CscVc";
import Footer from "../../common/footer";

const Csc = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Main>
        <ImageBox>
          <BoxTitle>고객센터</BoxTitle>
        </ImageBox>
        <Section>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="공지사항" value="1" />
                  <Tab label="자주묻는질문" value="2" />
                  <Tab label="문의하기" value="3" />
                  <Tab label="투자문의" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <CscNotice />
              </TabPanel>
              <TabPanel value="2">
                <CscQna />
              </TabPanel>
              <TabPanel value="3">
                <CscBtn />
              </TabPanel>
              <TabPanel value="4">
                <CscVc />
              </TabPanel>
            </TabContext>
          </Box>
        </Section>
      </Main>
      <Footer />
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 64.2vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/Vvc71ZCF/789.png");
`;
const BoxTitle = styled.div`
  color: white;
  font-size: 3.2rem;
  font-weight: 800;
  margin-left: 18%;
  margin-top: 3%;
  border-left: 5px solid white;
  padding-left: 1%;
`;
const Section = styled.div`
  width: 82%;
  height: 30rem;
`;
export default Csc;
