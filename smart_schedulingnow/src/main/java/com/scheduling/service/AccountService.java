package com.scheduling.service;

import com.scheduling.entity.Staff;
import com.scheduling.entity.schedule_time;
import com.scheduling.mapper.AccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;
import java.util.List;

@Service
public class AccountService {
    //首先说明这个文件的命名，因为涉及到登录和注册两个功能，所以对于login和register的选择会纠结，所以干脆就以account账号命名。
    @Autowired
    private AccountMapper accountMapper;

    //1.首先写登录功能
    //1-1首先检验账号是否存在，如果不存的话提示员工注册账号（前端跳出对话框提示）。是否自动跳转到注册页面可以小组讨论决定
    public Staff CheckLoginStatus(String mail, String pwd){


        System.out.println(mail+"------"+pwd);
        Staff staff = accountMapper.GetAccountInfo(mail,pwd);
        return staff;
    }

    public boolean RegisterAccountInfo(Staff staff) {
        try {
            return accountMapper.RegisterAccountInfo(staff);
        } catch (DataIntegrityViolationException e) {
            return false;
        }
    }
    //2.注册功能的实现
    //2.员工的注册功能，管理员账号可以不用注册，直接给出一个最高权限的账号就可以了。
    public boolean RegisterAccount(Staff staff){
       return accountMapper.RegisterAccountInfo(staff);
    }

    public int CheckIdAmount(){
        int amount_id = accountMapper.CheckStaffAmount();
        return amount_id;
    }

    public String CheckSameId(String id){
        String flag = null;
        flag = accountMapper.CheckSameId(id);
        return flag;
    }

    public int SetStaffPreference(String type, String staff, String value){
        int flag = 0;
        flag = accountMapper.SetStaffPreference(type,staff,value);
        return flag;
    }

//    public void addworker(Staff addworker){
//        accountMapper.insertnewworker(addworker);
//    }
    public String selectShop_1(String mail) {
        return accountMapper.selectShop_1(mail);
    }

    public List<schedule_time> selectScheduleInfo01(String shop) {
        return accountMapper.selectScheduleInfo01(shop);
    }
    public List<schedule_time> selectScheduleInfo02(String shop) {
        return accountMapper.selectScheduleInfo02(shop);
    }
    public List<schedule_time> selectScheduleInfo03(String shop) {
        return accountMapper.selectScheduleInfo03(shop);
    }
    public List<schedule_time> selectScheduleInfo04(String shop) {
        return accountMapper.selectScheduleInfo04(shop);
    }
    public List<schedule_time> selectScheduleInfo05(String shop) {
        return accountMapper.selectScheduleInfo05(shop);
    }
    public List<schedule_time> selectScheduleInfo06(String shop) {
        return accountMapper.selectScheduleInfo06(shop);
    }
    public List<schedule_time> selectScheduleInfo07(String shop) {
        return accountMapper.selectScheduleInfo07(shop);
    }
}
