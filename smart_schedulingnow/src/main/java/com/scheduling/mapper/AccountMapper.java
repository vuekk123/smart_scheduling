package com.scheduling.mapper;

import com.scheduling.entity.Staff;
import com.scheduling.entity.schedule_time;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AccountMapper {
    //查询账号合法性
    @Select("select * from staff where mail = #{mail} and pwd = #{pwd}")
    Staff  GetAccountInfo(@Param("mail") String mail,
                       @Param("pwd") String pwd);

    //注册账号
    @Insert("insert into staff (id, name, mail, position, shop, pwd)" +
            "values (#{id}, #{name}, #{mail}, #{position}, #{shop}, #{pwd})")
    boolean RegisterAccountInfo(Staff staff);

    //查询用户总共数量
    @Select("select count(*) from staff")
    int CheckStaffAmount();

    //查询是否存在相同的id
    @Select("select * from staff where id = #{id}")
    String CheckSameId(@Param("id") String id);

    //设置员工偏好信息
    @Insert("insert into preference (type, staff, value)" +
            "values (#{type}, #{staff}, #{value})")
    int SetStaffPreference(@Param("type") String type,
                           @Param("staff") String staff,
                           @Param("value") String value);

    //查询登录的用户属于哪一个门店
    @Select("select shop from staff where mail = #{mail}")
    String selectShop_1(@Param("mail") String mail);

//    @Insert("insert into staff (id, name, mail, position, shop, pwd)" +
//            "values (#{id}, #{name}, #{mail}, #{position}, #{shop}, #{pwd})")
//    void insertnewworker(Staff addworker);
    //查询排班信息
    @Select("select * from schedule_time where shop = #{shop} and week='周一'")
    List<schedule_time> selectScheduleInfo01(@Param("shop") String shop);

    @Select("select * from schedule_time where shop = #{shop} and week='周二'")
    List<schedule_time> selectScheduleInfo02(@Param("shop") String shop);
    @Select("select * from schedule_time where shop = #{shop} and week='周三'")
    List<schedule_time> selectScheduleInfo03(@Param("shop") String shop);
    @Select("select * from schedule_time where shop = #{shop} and week='周四'")
    List<schedule_time> selectScheduleInfo04(@Param("shop") String shop);
    @Select("select * from schedule_time where shop = #{shop} and week='周五'")
    List<schedule_time> selectScheduleInfo05(@Param("shop") String shop);
    @Select("select * from schedule_time where shop = #{shop} and week='周六'")
    List<schedule_time> selectScheduleInfo06(@Param("shop") String shop);
    @Select("select * from schedule_time where shop = #{shop} and week='周日'")
    List<schedule_time> selectScheduleInfo07(@Param("shop") String shop);

}