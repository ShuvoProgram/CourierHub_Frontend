/* eslint-disable no-sparse-arrays */
/* eslint-disable react/prop-types */
import { IconButton } from "@chakra-ui/button";
import { Box, Stack } from "@chakra-ui/layout";
import Notifications from "./notifications";
import Profile from "./profile";
// import { ThemeToggle } from "./theme-toggle";
import { CgMenuRightAlt, CgMenuMotion } from "react-icons/cg";
import { Icon } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/hooks";
import { SlideFade } from "@chakra-ui/transition";
const Actions = () => {
  const { onToggle, isOpen } = useDisclosure();
  return (
    <>
      <ActionsList display={["none", , "flex"]} />
      <ActionsButton onClick={onToggle} isOpen={isOpen} />
      <Box pos="absolute" insetX="5" top="5rem" zIndex="overlay">
        <SlideFade in={isOpen} offsetY="90px">
          <ActionsList
            p={5}
            justify="center"
            rounded="3xl"
            shadow="lg"
            layerStyle="neutral"
            justifyContent="space-between"
            display={["flex", , "none"]}
          />
        </SlideFade>
      </Box>
    </>
  );
};

const ActionsList = (props) => {
  return (
    <Stack direction="row" alignItems="center" spacing={[2, , 6]} {...props}>
      {/* <ThemeToggle /> */}
      <Notifications />
      <Profile />
    </Stack>
  );
};

export default Actions;

const ActionsButton = (props) => {
  const { isOpen, ...rest } = props;
  const icon = isOpen ? CgMenuMotion : CgMenuRightAlt;
  return (
    <IconButton
      display={{ md: "none" }}
      colorScheme="brand"
      variant="ghost"
      fontSize="2xl"
      aria-label="Toggle Actions"
      icon={<Icon as={icon} />}
      transition="all .4s ease-in-out"
      {...rest}
    />
  );
};
