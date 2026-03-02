export const healthCheck=(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Health API is working fine"
    })
}

export const timeCheck=(req,res)=>{
    const currentTime=new Date();
    res.status(200).json({
        success:true,
        message:"Current time is" + currentTime.toLocaleTimeString(),
        time:currentTime
    })
}