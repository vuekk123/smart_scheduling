package com.scheduling.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class addpeople {
    @JsonProperty("name")
    private String name;
    @JsonProperty("sex")
    private String sex;
    @JsonProperty("age")
    private Integer age;
    @JsonProperty("telephone")
    private String telephone;
    @JsonProperty("email")
    private String email;
    @JsonProperty("postion")
    private String postion;

    public addpeople() {
    }

    @JsonCreator
    public addpeople(@JsonProperty("name") String name, @JsonProperty("age") int age, @JsonProperty("sex") String sex,
                     @JsonProperty("email") String email, @JsonProperty("telephone") String telephone, @JsonProperty(
            "postion") String postion) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.email = email;
        this.postion=postion;
        this.telephone=telephone;

    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public int getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPostion() {
        return postion;
    }

    public void setPostion(String postion) {
        this.postion = postion;
    }
}
