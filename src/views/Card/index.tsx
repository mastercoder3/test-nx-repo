import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function SubCard({content, children, sx}) {

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