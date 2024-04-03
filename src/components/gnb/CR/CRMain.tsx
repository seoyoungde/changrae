import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Footer from "../../common/footer";
import CRNews from "./CRCommon/CRNews";
import CRIntro from "./CRContent/CRIntro";
import CRCeo from "./CRContent/CRCeo";
import CRBusiness from "./CRContent/CRBusiness";
import CRService from "./CRContent/CRService";
import CRCibi from "./CRContent/CRCibi";
import CRHistory from "./CRContent/CRHistory";
import CRInformation from "./CRCommon/CRInfromation";

const CRMain = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Main>
        <ImageBox>
          <BoxTitle>회사소개</BoxTitle>
        </ImageBox>
        <Section>
          <Box
            sx={{
              width: "100%",
              height: "auto;",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  width: "18%",
                }}
              >
                <TabList
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="(주)창래소개"
                    value="1"
                    sx={{
                      marginBottom: "3rem;",
                      fontSize: "1.1rem;",
                    }}
                  />
                  <Tab
                    label="대표이사인사말"
                    value="2"
                    sx={{ marginBottom: "3rem;", fontSize: "1.1rem;" }}
                  />
                  <Tab
                    label="사업소개"
                    value="3"
                    sx={{ marginBottom: "3rem;", fontSize: "1.1rem;" }}
                  />
                  <Tab
                    label="서비스소개"
                    value="4"
                    sx={{ marginBottom: "3rem;", fontSize: "1.1rem;" }}
                  />
                  <Tab
                    label="CI / BI"
                    value="5"
                    sx={{ marginBottom: "3rem;", fontSize: "1.1rem;" }}
                  />
                  <Tab
                    label="회사연혁"
                    value="6"
                    sx={{ marginBottom: "4rem;", fontSize: "1.1rem;" }}
                  />
                </TabList>
              </Box>
              <TabPanel value="1" sx={{ width: "78%" }}>
                <CRIntro />
              </TabPanel>
              <TabPanel value="2" sx={{ width: "78%" }}>
                <CRCeo />
              </TabPanel>
              <TabPanel value="3" sx={{ width: "78%" }}>
                <CRBusiness />
              </TabPanel>
              <TabPanel value="4" sx={{ width: "78%" }}>
                <CRService />
              </TabPanel>
              <TabPanel value="5" sx={{ width: "78%" }}>
                <CRCibi />
              </TabPanel>
              <TabPanel value="6" sx={{ width: "78%" }}>
                <CRHistory />
              </TabPanel>
            </TabContext>
          </Box>
        </Section>
        <CRNews />
        <CRInformation />
      </Main>
      <Footer />
    </>
  );
};
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
`;
const ImageBox = styled.div`
  width: 100%;
  height: 64.2vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("https://i.postimg.cc/BZzvz7T2/456-2.png");
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
  margin-top: 10rem;
  width: 100%;
  height: auto;
`;

export default CRMain;
