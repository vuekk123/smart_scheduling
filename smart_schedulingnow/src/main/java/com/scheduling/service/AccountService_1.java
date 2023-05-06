package com.scheduling.service;

import com.scheduling.entity.Staff;
import com.scheduling.entity.schedule_time;
import com.scheduling.mapper.AccountMapper_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class AccountService_1 {

    @Autowired
    private AccountMapper_1 accountMapper_1;


    public String checkmail(String mail) {
        return accountMapper_1.checkmail(mail);



    }

    //查询星期一的工作有哪些人
    public List<schedule_time> selectPeople(Date date) {
        return accountMapper_1.selectPeople(date);
    }
    public List<Staff> selectAllStaff(String shop) {
        return accountMapper_1.selectAllStaff(shop);
    }

    //============================by_k_beg======================================================
    public List<Staff> del_selectAllStaff(String shop) {
        return accountMapper_1.del_selectAllStaff(shop);
    }

    public List<Staff> fir_selectAllStaff(String shop) {
        return accountMapper_1.fir_selectAllStaff(shop);
    }

    //============================by_k_end======================================================
    public List<schedule_time> ViewByDay(String shop,String date) {
        return accountMapper_1.ViewByDay(shop,date);
    }


    public List<schedule_time> ViewByWeek(Date date,String shop) {
        return accountMapper_1.ViewByWeek(date,shop);
    }
    public int deleteStaff(String staffId) {
        return accountMapper_1.deleteSatff(staffId);
    }
}
