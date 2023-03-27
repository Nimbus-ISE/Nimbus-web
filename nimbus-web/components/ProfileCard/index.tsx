import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

interface ProfileCardProps {
	image: string;
	name: string;
	shape: 'rectangle' | 'circle';
	onClick?: () => void;
}

const ProfileCard = ({ image, name, shape, onClick }: ProfileCardProps) => {
	return (
		<Stack justifyContent="center" alignItems="center">
			<Button onClick={onClick}>
				<Box
					component="img"
					sx={
						shape == 'circle'
							? {
									borderRadius: '50%',
									width: { xs: '80px', sm: '80px' },
									height: { xs: '80px', sm: '80px' },
							  }
							: { borderRadius: '8px', width: '100px', height: '80px' }
					}
					src={image}
				/>
			</Button>
			<Typography fontSize="12px">{name}</Typography>
		</Stack>
	);
};

export default ProfileCard;
