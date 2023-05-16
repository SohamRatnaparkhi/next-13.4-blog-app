import React, { FC } from "react";

type Props = {
  params: {
    slug: string;
  };
};

const LoginPage: FC<Props> = ({ params }) => {
  return <div>{params.slug}</div>;
};

export default LoginPage;
