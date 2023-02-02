import './Detail.scss';
export default function Detail({titleX}) {
    


    return(
       
            <div  className='detail'>
                <div   className='detail__title'>
                        {titleX}
                </div>
                <div className='detail__items'>
                        <div className='detail__items-item'>item 1</div>
                        <div className='detail__items-item'>item 2</div>
                        <div className='detail__items-item'>item 3</div>
                        <div className='detail__items-item'>item 4</div>
                        <div className='detail__items-item'>item 5</div>
                </div>
        
            </div>
        
    )
}