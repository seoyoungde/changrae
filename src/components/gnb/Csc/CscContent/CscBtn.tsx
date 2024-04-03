import React from "react";
import styled from "@emotion/styled";
import { TextField, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none", // 테두리 없애기
          },
        },
      },
    },
  },
});

const CscBtn: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Table>
          <tbody>
            <TableRow>
              <LeftTableCell>이름</LeftTableCell>
              <RightTableCell>
                <TextField
                  variant="outlined"
                  placeholder="이름을 입력하세요"
                  fullWidth
                  required
                />
              </RightTableCell>
            </TableRow>
            <TableRow>
              <LeftTableCell>연락처</LeftTableCell>
              <RightTableCell>
                <TextField
                  variant="outlined"
                  placeholder="답변받으실 연락처를 입력하세요"
                  fullWidth
                  required
                />
              </RightTableCell>
            </TableRow>
            <TableRow>
              <LeftTableCell>제목</LeftTableCell>
              <RightTableCell>
                <TextField
                  variant="outlined"
                  placeholder="제목을 입력하세요"
                  fullWidth
                  required
                />
              </RightTableCell>
            </TableRow>
            <TableRow>
              <LeftTableCell>내용</LeftTableCell>
              <RightTableCell>
                <TextField
                  variant="outlined"
                  placeholder="내용을 입력하세요"
                  multiline
                  rows={15}
                  fullWidth
                  required
                />
              </RightTableCell>
            </TableRow>
          </tbody>
        </Table>
        <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
      </Container>
    </ThemeProvider>
  );
};
const Container = styled.div`
  width: 100%;
  padding: 20px;
  height: auto;
  margin-top: 5rem;
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  border: 0.5px solid #ddd;
`;

const LeftTableCell = styled.td`
  padding: 8px;
  border-right: 1px solid #ddd;
  background-color: #f4f4f4;
  text-align: center;
  width: 10rem;
`;
const RightTableCell = styled.td`
  padding: 8px;

  border-right: 1px solid #ddd;
  &:last-child {
    border-right: none;
  }
`;
const SubmitButton = styled.div`
  width: 10rem;
  height: 3vh;
  margin: auto;
  margin-top: 3rem;
  padding: 8px 16px;
  background-color: #213e6a;
  text-align: center;
  line-height: 3vh;
  font-weight: 500;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export default CscBtn;
