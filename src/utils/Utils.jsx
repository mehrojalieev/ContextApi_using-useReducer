import './Utils.scss'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const Utils = () => {
    return (
        <div>
            <Stack spacing={1}>
                <Skeleton variant="rounded" width={250} height={260} />
            </Stack>
        </div>
    )
}

export default Utils