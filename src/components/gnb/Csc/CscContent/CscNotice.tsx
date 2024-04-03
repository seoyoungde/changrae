import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      title: "공지사항 제목 1",
      content: "공지사항 내용 1",
      author: "작성자1",
      date: "2022-04-01",
      views: "123",
    },
    {
      id: 2,
      title: "공지사항 제목 2",
      content: "공지사항 내용 2",
      author: "작성자2",
      date: "2022-04-02",
      views: "123",
    },
    {
      id: 3,
      title: "공지사항 제목 3",
      content: "공지사항 내용 3",
      author: "작성자3",
      date: "2022-04-03",
      views: "123",
    },
    {
      id: 4,
      title: "공지사항 제목 3",
      content: "공지사항 내용 3",
      author: "작성자3",
      date: "2022-04-03",
      views: "123",
    },
    {
      id: 5,
      title: "공지사항 제목 3",
      content: "공지사항 내용 3",
      author: "작성자3",
      date: "2022-04-03",
      views: "123",
    },
  ]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = () => {
    // 검색 기능 구현
    console.log("검색어:", searchKeyword);
  };

  const handleChangeSortOrder = (event: any) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <Container style={{ width: "100%", height: "auto", marginTop: "5rem" }}>
      <FormControl
        variant="outlined"
        size="small"
        style={{ width: "5rem", marginRight: "1rem" }}
      >
        <InputLabel id="search-label">제목</InputLabel>
        <Select
          labelId="search-label"
          id="search-type"
          value={searchKeyword}
          onChange={handleChangeSortOrder}
          label="제목/내용"
        >
          <MenuItem value="title">제목</MenuItem>
          <MenuItem value="content">내용</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="검색어 입력"
        variant="outlined"
        size="small"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        style={{ marginRight: "1rem", width: "17rem" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginRight: 10 }}
      >
        검색하기
      </Button>

      <TableContainer
        component={Paper}
        style={{ marginBottom: "3rem", marginTop: "2rem" }}
      >
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#F2F2F2" }}>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>작성일</TableCell>
              <TableCell>조회수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices.map((notice, index) => (
              <TableRow key={notice.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{notice.title}</TableCell>
                <TableCell>{notice.author}</TableCell>
                <TableCell>{notice.date}</TableCell>
                <TableCell>{notice.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBox>
        <Stack spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </PaginationBox>
    </Container>
  );
};
const PaginationBox = styled.div`
  display: flex;
  justify-content: center;
`;
export default NoticeBoard;
