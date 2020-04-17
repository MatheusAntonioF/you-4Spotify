import React from 'react';

import { MdAccountBox } from 'react-icons/md';

import { Container, DivOutside, DivInside, DivImg, Link } from './styles';

export default function Home() {
  return (
    <Container>
      <DivOutside>
        <DivImg>
          <img src="/assets/logo.png" alt="Logo Application" />
        </DivImg>
        <DivInside>
          <Link href="https://accounts.google.com/o/oauth2/auth?client_id=487406575433-44nanj3jha6bm2ln2kv1dsfdhpo9s6f6.apps.googleusercontent.com&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/youtube.readonly&response_type=token">
            <MdAccountBox size={38} />
            Sign In
          </Link>
        </DivInside>
      </DivOutside>
    </Container>
  );
}
