import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export function SubCard({title, secondary, content, children, sx}) {

    return (
        <Card
            sx={{
                width: '100%',
                border: '1px solid',
                ':hover': {
                    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
                },
                ...sx
            }}
            >
             <CardHeader sx={{ p: 2.5 }} title={<Typography variant="h5">{title}</Typography>} action={secondary} />
            {title && (
                <Divider
                    sx={{
                        opacity: 1
                    }}
                />
            )}

            {/* card content */}
            {content && (
                <CardContent sx={{ p: 2.5 }}>
                    {children}
                </CardContent>
            )}
            {!content && children}
        </Card>
    );
}

export default SubCard;