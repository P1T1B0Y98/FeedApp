﻿using Domain.Entities;

namespace Application.DTO
{
    public class PollDTO
    {
        public Guid Id { get; set; }
        public string Question { get; set; }
        public bool IsPrivate { get; set; }
        public bool IsClosed { get; set; }
        public DateTime EndTime { get; set; }
        public User Creator { get; set; }
        public int CountVotes { get; set; }

        public PollDTO(Guid id, string question, bool isPrivate, bool isClosed, DateTime endTime, User creator, int countVotes)
        {
            Id = id;
            Question = question;
            IsPrivate = isPrivate;
            IsClosed = isClosed;
            EndTime = endTime;
            Creator = creator;
            CountVotes = countVotes;
        }
    }
}
