import useAuth from "@/context/authContext";
import RowEditor from "@/domains/user/rowUpdater";
import UserLayout from "@/layout/userLayout";
import {
  Button,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { ReactElement, useEffect, useState } from "react";

const MePage = () => {
  const [data, setData] = useState<any>([]);
  const { supabaseClient, user } = useAuth();

  const getData = async () => {
    if (supabaseClient) {
      const { data, error } = await supabaseClient
        .from("forms")
        .select()
        .eq("user_email", user?.email);

      console.log("data", data);

      setData(data ?? []);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <VStack w="100%" h="100%" p="40px" spacing="40px">
      <Text w="100%">Миний анкетууд</Text>
      <TableContainer w="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Овог</Th>
              <Th>Нэр</Th>
              <Th>Мэргэжил</Th>
              <Th>Их сургууль</Th>
              <Th isNumeric>Ажлын туршлага</Th>
              <Th>Үүсгэсэн огноо</Th>
              <Th>Зассан огноо</Th>
              <Th>Үйлдэл</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el: any, idx: number) => (
              <Tr key={idx}>
                <Td>{el?.last_name}</Td>
                <Td>{el?.first_name}</Td> <Td>{el?.profession}</Td>{" "}
                <Td>{el?.university_name}</Td> <Td>{el?.experience_yrs}</Td>
                <Td>{el?.created_at}</Td>
                <Td>{el?.updated_at}</Td>
                <Td>
                  <RowEditor data={el} refresh={getData} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

MePage.getLayout = (page: ReactElement) => <UserLayout> {page} </UserLayout>;

export default MePage;
