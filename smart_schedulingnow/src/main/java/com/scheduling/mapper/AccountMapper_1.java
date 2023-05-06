package com.scheduling.mapper;

import com.scheduling.entity.Staff;
import com.scheduling.entity.schedule_time;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Mapper
@Repository
public interface AccountMapper_1 {

    @Select("select mail from staff where mail = #{mail}")
    String checkmail(@Param("mail") String mail);

    //根据日期查询某天有哪些人工作(按日查询)
    @Select("select * from schedule_time where week = #{date}")
    List<schedule_time> selectPeople(@Param("date")Date date);

    @Select("select name from staff where shop = #{shop}")
    List<Staff> selectAllStaff(@Param("shop")String shop);

    //============================by_k_beg======================================================
    @Select("select name,id,shop from staff where shop = #{shop}")
    List<Staff> fir_selectAllStaff(@Param("shop")String shop);
    @Select("select * from staff where shop = #{shop} and flag = 1")
    List<Staff> del_selectAllStaff(@Param("shop")String shop);
    //============================by_k_end======================================================
    @Select("select * from schedule_time where date = #{date} and shop = #{shop}")
    List<schedule_time> ViewByDay(@Param("shop")String shop,
                                  @Param("date")String date);

    @Select("select * from schedule_time where date = #{date} and shop = #{shop}" )
    List<schedule_time> ViewByWeek(@Param("date") Date date,
                                   @Param("shop") String shop);
    @Update("update staff set flag = -1 where id = #{staffId}")
    int deleteSatff(@Param("staffId") String staffId);



//    @Select("select * from schedule_time where date between #{s} and #{s1}")
//    List<schedule_time> ViewByWeek(@Param("s") long time,
//                                   @Param("s1") long time1);


//"select nowid,CONVERT(varchar(10),dutydate,23)as dutydate,week,nameA,phoneA,nameB,phoneB from nowdutysheet";
//    Select CONVERT(varchar(100), GETDATE(), 120): 2006-05-16 10:57:49
    //select * from tables where creationdate between to_date('2008-01-01','yyyy-mm-dd') and to_date('2008-07-31','yyyy-mm-dd')

    //select * from tables where to_char(a.creationdate,'yyyy-mm-dd') between '2008-01-01' and '2008-07-31'

}
