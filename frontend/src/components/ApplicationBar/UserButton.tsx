import { memo, MouseEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';

type UserButtonProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
};

const UserButtonInner = (props: UserButtonProps) => {
  const { onClick } = props;

  return (
    <Box sx={{ cursor: 'pointer' }} onClick={onClick}>
      <Avatar>KK</Avatar>
    </Box>
  );
};

export const UserButton = memo(UserButtonInner);
