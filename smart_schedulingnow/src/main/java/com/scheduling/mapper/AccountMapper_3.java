package com.scheduling.mapper;


import com.scheduling.entity.dian;
import com.scheduling.entity.yhzdygz;
import com.scheduling.entity.zhiwei;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface AccountMapper_3 {

    @Select("SELECT position FROM storeposition WHERE sid=#{sid}")
    public List<zhiwei> getzhiwei(@Param("sid")String sid);


    @Select("SELECT sid,name,sname FROM shop WHERE sid=#{sid}")
    public dian getdian(@Param("sid")String sid);

    @Insert("INSERT INTO schedulingrules VALUES(\"开店前准备时间\",#{sid},#{kdqzbsj},1);\n")
    public void changekdgz1(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"开店前面积人数比值\",#{sid},#{kdqbz},1);\n")
    public void changekdgz2(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"开店前限定职位\",#{sid},#{kdqxdzw},1);\n")
    public void changekdgz3(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"开店前期间客流人数比值\",#{sid},#{kdqjklbz},1)\n")
    public void changekdgz4(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"开店期间限定职位\",#{sid},#{kdqjxdzw},1);\n")
    public void changekdgz5(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"开店期间最低值班人数\",#{sid},#{zdzbrs},1);\n")
    public void changekdgz6(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"关店收尾时间\",#{sid},#{gdsj},1);\n")
    public void changekdgz7(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"关店面积人数比\",#{sid},#{gdmjrsb},1);\n")
    public void changekdgz8(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"关店额外辅助人数\",#{sid},#{gdewfzrs},1);\n")
    public void changekdgz9(yhzdygz yhzdygz);
    @Insert("INSERT INTO schedulingrules VALUES(\"关店限定职位\",#{sid},#{gdxdzw},1);")
    public void changekdgz10(yhzdygz yhzdygz);



    @Select("SELECT ruleValue FROM schedulingrules WHERE sid=#{sid} AND ruleType=#{str} AND flag=1")
    public String getneirong(@Param("str") String str,@Param("sid")String sid);

//    @Insert("INSERT INTO schedulingrules VALUES(\"开店前准备时间\",#{sid},#{kdqzbsj},1);\n" +
//            "INSERT INTO schedulingrules VALUES(\"开店前面积人数比值\",#{sid},#{kdqbz},1);\n" +
//            "INSERT INTO schedulingrules VALUES(\"开店前限定职位\",#{sid},#{kdqxdzw},1);\n" +
//             +
//             +
//             +
//             +
//             +
//             +
//            )
}
