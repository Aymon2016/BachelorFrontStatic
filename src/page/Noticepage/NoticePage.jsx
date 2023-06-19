
import './noticepage.scss'
import { useNavigate } from 'react-router-dom';


const NoticePage = () => {

    const news = [
        {
            id: 1,
            title: 'monthly home rent',
            body: 'sobari masher taka ta diye diben apnaer kjoakfd  difufsj  ioudsoifd  ifuau  saidu ',
            date: '1-2-23'
        },
        {
            id: 1,
            title: 'monthly home rent',
            body: 'sobari masher taka ta diye diben apnaer kjoakfd  difufsj  ioudsoifd  ifuau  saidu ',
            date: '1-2-23'
        },

    ]
    const navigate = useNavigate();
    const handleClick = (data) => {
        navigate('/singlenotice', { state: data });
    }


    return (
        <div className='newsContainer'>
            <ul>
                <div className="notice">Notice</div>
                {
                    news.map((item, index) => (

                        <li key={item.id} onClick={() => handleClick(item)}>{index + 1}. {item.title} <span>{item.date}</span></li>

                    ))
                }

            </ul>
        </div>
    )
}


export default NoticePage
