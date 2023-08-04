import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const testimonials = [
  {
    name: "Mr. A.  A.  Ademiluyi",
    role: "Chairman/Managing  Director",
    content:
      "He holds an M.Sc degree in Economics from Howard University, Washington in the United States of America.  He worked with Total Oil in Paris, France and later Total Nigeria Plc  for over 10 years.  He has over 30 years experience in the Shipping,Oil/Gas industry.",
    avatar: "",
  },
  {
    name: "Alh. Mohammed Rehman",
    role: "Member Board of Directors",
    content:
      "He is a Pakistani national from Ghazi, Haripur District, Pakistan.  He is a qualified Master mariner from Pakistan Maritime Academy.  He has over 25 years experience in the Marine/Shipping as well as Oil & Gas industry.  He is also on the board of several companies in Pakistan.  ",
    avatar: "",
  },
  {
    name: "Alh. Tousif Mohammed Paracha",
    role: "Member Board of Directors",
    content:
      "He is a Pakistani national from Sargodha, Pakistan.  He holds a Bachelor of Arts from National College, Karachi, Pakistan and LL.B for S.M. Law College, Karachi, Pakistan.    He has over 27 years experience in Marine/Shipping as well as Oil & Gas industry.  He is on the board of several companies in Pakistan. ",
    avatar: "",
  },
  {
    name: "Dr. G. Akisanya",
    role: "Executive Director",
    content:
      "He has an MBBS from the University of Lagos.  He is a successful medical practitioner with over 25 years in practice.  He also holds a Post Graduate Diploma in Management.  He has been involved in the Shipping, Oil/gas industry for over 20 years.  He was also a member of the Federal Government Think-Tank Group on the revitalization of Bunkering business in the country.",
    avatar: "",
  },
  {
    name: "Barrister G.T. J. Ademola",
    role: "Director",
    content:
      "He holds an LL.B degree from the University of London.  He is a legal practitioner and the principal partner in the chambers of G.T.J. Ademola & Co.  He has over 25 years experience in legal practice.",
    avatar: "",
  },
  {
    name: "Mr. Ibrahim Bayero",
    role: "Member Board of Directors",
    content:
      "He has over 15 years experience in the Automobile industry.  He is presently on the Board of National Truck Manufacturers (NTM) Kano.",
    avatar: "",
  },
  {
    name: "Mr. A. A. Ademiluyi",
    role: "Managing Director",
    content:
      "He holds an M.Sc in Economics from Howard University, Washington DC United States of America.  He has over 35 years experience in the Shipping/Oil industry.",
    avatar: "",
  },
  {
    name: "Alh. M. Rehman",
    role: "Executive Director-Marine/Shipping",
    content:
      "He is a qualified Master Mariner from Pakistan Maritime Academy.  He has over 30 years experience in the Marine/Shipping in the Oil & Gas industry. He is also an Executive Director in the company's   associated company-Ghazi Shipping & Trading Company Limited for over 20 years.",
    avatar: "",
  },
  {
    name: "Alh. T. Paracha",
    role: "Executive Director-Chartering/Brokerage and Business Development",
    content:
      "He has over 30 years experience in Ship brokerage, chartering and management.",
    avatar: "",
  },
  {
    name: "Dr. G. Akisanya",
    role: "Executive- Finance/Admin",
    content:
      "He is a successful medical practitioner with over 25 years experience in medical practice.  He also holds a Post Graduate Diploma in Management.",
    avatar: "",
  },
  {
    name: "Mr. Jerry O. Omughelli ",
    role: "General Manager - Finance/Admin",
    content:
      "He holds an M.BA in Banking and Finance and M.Sc in Economics both from Enugu State University of Technology (ESUT) Business School, Lagos.  He has over 25 years experience in Finance and Management.",
    avatar: "",
  },
  {
    name: "Mr. Iftikhar Ahmed",
    role: "Head-Accounts/Financial Reporting",
    content:
      "He holds a B.Sc  Accountancy from the University of Punjab, Pakistan.  He is a member of the Institute of Public Finance Accountants, Pakistan.  He has over 15 years experience in Project Finance, Financial Analysis, Systems implementation and Financial Reporting.",
    avatar: "",
  },
  {
    name: "Mr. Malik Asmatullah Khan",
    role: "(Master Mariner) - (DPA)",
    content:
      "Designated Person Ashore (DPA) and Marine Representative of the Company.   He graduated from  Pakistan Marine Academy, Karachi and qualified as a Nautical Cadet.  He has done HND/BTech from Nautical College Fleetwood, Blackpool, United Kingdom.  He also studied in Riversdale  College, Liverpool, United Kingdom and obtained Class 1 Master Mariner  Certificate of Competency.  He has also done BSC and carried out attended several Advance Level courses in .  He has done Lead Auditor , ISM Course from the United Kingdom and ISO.  He is a member of IRCA United Kingdom (International Register of Certified Auditors.  He is also Certified ISO, SON (Standard Organisation of Nigeria) Auditor for Quality Systems.  He also qualified as a Certified Auditor of MLC (Maritime Labour Convention He has sailed as Master on Board Multinational Companies around the world and has wide range of experience.  He also attended Petroleum Tanker  Safety Course and qualified as a Master Mariner. He has worked as a Captain on board various Coastal Tankers of  30,000  to 50,000 tons Deadweight.  He has over 25 years working experience.  ",
    avatar: "",
  },
  {
    name: "Mr. Pervez Anwar",
    role: "Marine Engineer",
    content:
      "He holds Class 1 Marine Engineer Certificate of Competency.   He has a wide range of experience as Chief Engineer.  The has attended numerous marine courses Technical Training Course at I.H. I. Diesel and Boiler works AIOI, japan in construction, Operations, Ship trials and Maintenance of Diesel Engines in 1977.  Construction and maintenance of Deck Machinery for Freedom Vessels at I.H.I. Osaka and Tokyo Yards in 1977, Construction of Hull and Superstructure for Freedom Vessels in I.H.I. Osaka and Tokyo Yards in 1977.  He was also selected as Engineering Instructor for Pakistan Marine Academy, Karachi by the Federal Public Service Commission in Grade 19 (Associate Professor) a position he served for 10 years.  In 1988, he  attended a Computers on Simulation in Marine Engineering course at College of Maritime Studies, Warshash, Southampton, United Kingdom.  He also attended Engine Plant Simulator Course for Chief Engineers at the College of Maritime Studies, Warsash, Southampton, United Kindgom",
    avatar: "",
  },
  {
    name: "Capt. Stephen Sobaeh ",
    role: "(Master Marine) - Crew Manager",
    content:
      "He is a seasoned Captain with over 25 years experience in Coastal Tankers of 5,000 to 30,000 tons Deadweight.",
    avatar: "",
  },
];

function TestimonialCard(props) {
  const { name, role, content, avatar } = props;
  return (
    <Container maxW={"7xl"} p={{ base: 4, md: 0 }}>
      <Flex
        boxShadow={"lg"}
        maxW={"640px"}
        direction={{ base: "column-reverse", md: "row" }}
        width={"full"}
        rounded={"xl"}
        p={10}
        justifyContent={"space-between"}
        position={"relative"}
        bg={useColorModeValue("white", "gray.800")}
        _after={{
          content: '""',
          position: "absolute",
          height: "21px",
          width: "29px",
          left: "35px",
          top: "-10px",
          backgroundSize: "cover",
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%23cccccc'/%3E%3C/svg%3E")`,
        }}
      >
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
        >
          <chakra.p
            fontFamily={"Work Sans"}
            fontWeight={"bold"}
            pb={4}
            fontSize={14}
          >
            {name}
            <chakra.span
              fontFamily={"Inter"}
              fontWeight={"medium"}
              color={"gray.500"}
            >
              {" "}
              - {role}
            </chakra.span>
          </chakra.p>
          <chakra.p
            fontFamily={"Inter"}
            fontWeight={"medium"}
            fontSize={"15px"}
          >
            {content}
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={"80px"}
          width={"80px"}
          alignSelf={"center"}
          m={{ base: "0 0 35px 0", md: "0 0 0 50px" }}
        />
      </Flex>
    </Container>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      px={{ base: "1em" }}
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h3
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          fontSize={20}
          textTransform={"uppercase"}
          color={useColorModeValue("gray.700", "gray.50")}
          pt={8}
        >
          We are Excellence in service delivery.
        </chakra.h3>
        <chakra.h1
          pb={5}
          fontSize={48}
          fontFamily={"Work Sans"}
          fontWeight={"bold"}
          color={useColorModeValue("gray.700", "gray.50")}
        >
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin={"auto"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          Meet our amazing team, a group of dedicated individuals who bring
          unique skills and expertise to the table, working together to achieve
          our common goals and deliver exceptional results. We are passionate,
          collaborative, and committed to providing the highest level of service
          to our clients.
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mt={16}
        mb={16}
        mx={"auto"}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box width={{ base: "full", sm: "lg", lg: "4xl" }} margin={"auto"}>
        <chakra.h2
          margin={"auto"}
          fontFamily={"Inter"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          The company also have a string of highly qualified, experienced and
          dedicated management staff that is respectively responsible for the
          following functional divisions of our operations- Our operational
          activities can be broadly grouped into: Shipping & Agency Services ,
          Operations & Distribution, Marketing/International Operations ,
          Finance/Administration, Technical/Marine Services.
        </chakra.h2>
      </Box>
    </Flex>
  );
}
