package com.cpr.technotogether.entity;

import javax.persistence.*;

@Entity
@Table(name = "tbl_solospace")
public class SoloSpaceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "soloSpaceId")
    private int id;

    @OneToOne(cascade={
            CascadeType.DETACH,
            CascadeType.MERGE,
            CascadeType.PERSIST,
            CascadeType.REFRESH,
    })
    @JoinColumn(name="username")
    private StudentEntity student;

    public SoloSpaceEntity(){}

    public SoloSpaceEntity(int id, StudentEntity student) {
        this.id = id;
        this.student = student;
    }

    public StudentEntity getStudent() {
        return student;
    }

    public void setStudent(StudentEntity student) {
        this.student = student;
    }
}
