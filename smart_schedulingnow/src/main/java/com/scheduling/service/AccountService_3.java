package com.scheduling.service;


import com.scheduling.entity.dian;
import com.scheduling.entity.yhzdygz;
import com.scheduling.entity.zhiwei;
import com.scheduling.mapper.AccountMapper_3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService_3 {
    @Autowired
    private AccountMapper_3 accountMapper_3;


    public List<zhiwei> getzhiwei(String sid){
        System.out.println("service"+sid);
        return accountMapper_3.getzhiwei(sid);
    }



    public dian getdian(String sid){
//        System.out.println("service"+sid);
        return accountMapper_3.getdian(sid);
    }

    public int changekdgz(yhzdygz yhzdygz) {
        accountMapper_3.changekdgz1(yhzdygz);
        accountMapper_3.changekdgz2(yhzdygz);
        accountMapper_3.changekdgz3(yhzdygz);
        accountMapper_3.changekdgz4(yhzdygz);
        accountMapper_3.changekdgz5(yhzdygz);
        accountMapper_3.changekdgz6(yhzdygz);
        accountMapper_3.changekdgz7(yhzdygz);
        accountMapper_3.changekdgz8(yhzdygz);
        accountMapper_3.changekdgz9(yhzdygz);
        accountMapper_3.changekdgz10(yhzdygz);


        return 1;
    }

    public yhzdygz getyhzdygz(String sid) {
        yhzdygz y = new yhzdygz();
        System.out.println("------"+sid);
        y.setKdqzbsj(accountMapper_3.getneirong("开店前准备时间",sid));
        y.setKdqbz(accountMapper_3.getneirong("开店前面积人数比值",sid));
        y.setKdqxdzw(accountMapper_3.getneirong("开店前限定职位",sid));
        y.setKdqjklbz(accountMapper_3.getneirong("开店前期间客流人数比值",sid));
        y.setKdqjxdzw(accountMapper_3.getneirong("开店期间限定职位",sid));
        y.setZdzbrs(accountMapper_3.getneirong("开店期间最低值班人数",sid));
        y.setGdsj(accountMapper_3.getneirong("关店收尾时间",sid));
        y.setGdmjrsb(accountMapper_3.getneirong("关店面积人数比",sid));
        y.setGdewfzrs(accountMapper_3.getneirong("关店额外辅助人数",sid));
        y.setGdxdzw(accountMapper_3.getneirong("关店限定职位",sid));

        System.out.println("----------------------"+y.toString());


        return y;
    }
}
