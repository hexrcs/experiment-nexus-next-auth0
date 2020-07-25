import { NextPage } from 'next';
import NextLink from 'next/link';
import { Button, Heading, Flex, Spinner } from '@chakra-ui/core';
import { useMeQuery } from '../generated/graphql';

const IndexPage: NextPage = () => {
  return (
    <Flex alignItems="center" flexDirection="column" margin={24}>
      <Heading>Welcome to my awesome site!</Heading>
      <Interface />
    </Flex>
  );
};

const Interface = () => {
  const [result] = useMeQuery();
  const { data, fetching, error } = result;

  if (fetching) return <Spinner />;
  if (error) return <LoginButton />;
  return (
    <>
      <Heading as="h2" size="lg" marginTop={8}>
        You are logged in as {data?.me?.name}
      </Heading>
      <LogoutButton />
    </>
  );
};

const LoginButton = () => (
  <Button size="sm" margin={8}>
    <NextLink href="/api/login">
      <a>Log in</a>
    </NextLink>
  </Button>
);

const LogoutButton = () => (
  <Button size="sm" margin={8}>
    <NextLink href="/api/logout">
      <a>Log out</a>
    </NextLink>
  </Button>
);

export default IndexPage;
